#!/usr/bin/env python3
"""Search-engine post-processing of the generated documentation, run by post.sh.

Three things, each for a reason Search Console showed on meshlib.io/documentation:

* doxygen_crawl.html gets a robots meta. Doxygen writes these link lists without
  html_header.html, so they miss the noindex every other page carries and end up
  in search results as pages of their own. Crawlers may still follow their links.
* Indexable pages (the whitelist, see remove_noindex.sh) get a meta description:
  the one listed in descriptions.txt, otherwise the page's first paragraph. Doxygen
  writes none, so search engines guessed a snippet for every guide.
* sitemap.xml in the html root lists exactly the indexable pages, so they no longer
  depend on being found through links.

The whitelist is matched by file name anywhere under the html root, exactly as
remove_noindex.sh does, and a page counts as indexable only if no noindex is left
in it. Running the script twice gives the same result.

Usage:
  seo_postprocess.py HTML_DIR --crawl-robots "noindex, follow"
      [--whitelist whitelist.txt --descriptions descriptions.txt --url-prefix URL]
"""
import argparse
import html
import os
import re
import sys

DESCRIPTION_MAX = 160
FALLBACK_LENGTH = 155
NOINDEX = re.compile(r'<meta name="(?:googlebot|robots)" content="[^"]*noindex', re.I)


def read_list(path):
    with open(path, encoding='utf-8') as f:
        return [line.strip() for line in f if line.strip() and not line.lstrip().startswith('#')]


def read_descriptions(path):
    descriptions = {}
    for line in read_list(path):
        page, sep, text = line.partition('|')
        if not sep or not text.strip():
            raise ValueError(f'{path}: expected "page.html|description", got: {line}')
        descriptions[page.strip()] = text.strip()
    return descriptions


def html_files(html_dir, name=None):
    for root, _dirs, files in os.walk(html_dir):
        for file in files:
            if file.endswith('.html') and (name is None or file == name):
                yield os.path.join(root, file)


def rel(html_dir, path):
    return os.path.relpath(path, html_dir).replace(os.sep, '/')


def read(path):
    with open(path, encoding='utf-8') as f:
        return f.read()


def write(path, text):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(text)


def add_crawl_robots(html_dir, content):
    """Put a robots meta into every doxygen_crawl.html that has none."""
    changed = 0
    for path in html_files(html_dir, 'doxygen_crawl.html'):
        page = read(path)
        if re.search(r'<meta name="robots"', page, re.I):
            continue
        page, count = re.subn(r'<head>', f'<head>\n<meta name="robots" content="{html.escape(content)}"/>', page, count=1)
        if count:
            write(path, page)
            changed += 1
    print(f'[seo] robots "{content}" added to {changed} doxygen_crawl.html page(s)')


def first_paragraph(page):
    """Text of the first real paragraph of the page body, trimmed to a snippet."""
    body = page.split('<div class="contents">', 1)[1] if '<div class="contents">' in page else page
    body = re.sub(r'<div class="fragment">.*?</div><!-- fragment -->', ' ', body, flags=re.S)
    for match in re.finditer(r'<p>(.*?)</p>', body, re.S):
        text = re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', match.group(1)))).strip()
        if len(text) >= 40:
            if len(text) <= FALLBACK_LENGTH:
                return text
            return text[:FALLBACK_LENGTH].rsplit(' ', 1)[0].rstrip(',;:') + '…'
    return None


def set_description(page, text):
    tag = f'<meta name="description" content="{html.escape(text, quote=True)}"/>'
    if re.search(r'<meta name="description" content="[^"]*"\s*/?>', page):
        return re.sub(r'<meta name="description" content="[^"]*"\s*/?>', lambda _: tag, page, count=1)
    return re.sub(r'<title>', lambda _: f'{tag}\n<title>', page, count=1)


def indexable_pages(html_dir, whitelist):
    names = set(read_list(whitelist))
    pages = []
    for path in html_files(html_dir):
        if os.path.basename(path) in names and not NOINDEX.search(read(path)):
            pages.append(path)
    return sorted(pages, key=lambda path: (rel(html_dir, path) != 'index.html', rel(html_dir, path)))


def add_descriptions(html_dir, pages, descriptions):
    listed = fallback = missing = 0
    for path in pages:
        page_rel = rel(html_dir, path)
        text = descriptions.get(page_rel)
        if text:
            listed += 1
        else:
            text = first_paragraph(read(path))
            if not text:
                missing += 1
                print(f'[seo] warning: no description for {page_rel}: add one to descriptions.txt')
                continue
            fallback += 1
            print(f'[seo] {page_rel}: description taken from the first paragraph, better add one to descriptions.txt')
        if len(text) > DESCRIPTION_MAX:
            print(f'[seo] warning: description of {page_rel} is {len(text)} characters, search engines cut it after about {DESCRIPTION_MAX}')
        write(path, set_description(read(path), text))
    unused = sorted(set(descriptions) - {rel(html_dir, path) for path in pages})
    for page_rel in unused:
        print(f'[seo] note: descriptions.txt lists {page_rel}, which is not an indexable page')
    print(f'[seo] descriptions: {listed} from descriptions.txt, {fallback} from the first paragraph, {missing} missing')


def write_sitemap(html_dir, pages, url_prefix):
    urls = ''.join(f'<url><loc>{html.escape(url_prefix.rstrip("/") + "/" + rel(html_dir, path))}</loc></url>\n' for path in pages)
    write(os.path.join(html_dir, 'sitemap.xml'),
          '<?xml version="1.0" encoding="UTF-8"?>\n'
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + '</urlset>\n')
    print(f'[seo] sitemap.xml: {len(pages)} page(s)')


def main():
    parser = argparse.ArgumentParser(description=__doc__.split('\n\n', 1)[0])
    parser.add_argument('html_dir')
    parser.add_argument('--crawl-robots', required=True, help='robots content for doxygen_crawl.html')
    parser.add_argument('--whitelist')
    parser.add_argument('--descriptions')
    parser.add_argument('--url-prefix')
    args = parser.parse_args()
    if not os.path.isdir(args.html_dir):
        sys.exit(f'[seo] error: {args.html_dir} is not a directory')

    add_crawl_robots(args.html_dir, args.crawl_robots)
    if args.whitelist:
        if not (args.descriptions and args.url_prefix):
            sys.exit('[seo] error: --whitelist needs --descriptions and --url-prefix')
        pages = indexable_pages(args.html_dir, args.whitelist)
        add_descriptions(args.html_dir, pages, read_descriptions(args.descriptions))
        write_sitemap(args.html_dir, pages, args.url_prefix)


if __name__ == '__main__':
    main()
