// Checks the search-engine side of the generated documentation (scripts/seo_postprocess.py):
// no page loads a tag manager, crawler link lists are kept out of the index, every
// indexable page has a description, and sitemap.xml lists exactly the indexable pages.
// Run against a built tree: HTML_DIR and URL_PREFIX in .env, as for canonicalLink.test.js.
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
require('dotenv').config();

const htmlDir = process.env.HTML_DIR;
const urlPrefix = process.env.URL_PREFIX;
if (!htmlDir || !urlPrefix) {
  throw new Error('Please specify HTML_DIR and URL_PREFIX in .env');
}

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((item) => {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) return htmlFiles(fullPath);
    return item.isFile() && item.name.endsWith('.html') ? [fullPath] : [];
  });
}

const relative = (file) => path.relative(htmlDir, file).split(path.sep).join('/');
const files = htmlFiles(htmlDir);
const whitelist = new Set(fs.readFileSync(path.join(__dirname, '..', 'whitelist.txt'), 'utf8')
  .split('\n').map((line) => line.trim()).filter(Boolean));
const noindex = /<meta name="(?:googlebot|robots)" content="[^"]*noindex/i;
const indexable = files.filter((file) => whitelist.has(path.basename(file)) && !noindex.test(fs.readFileSync(file, 'utf8')));

describe('documentation SEO', () => {
  it('loads no tag manager or analytics without consent', () => {
    const offenders = files.filter((file) => /googletagmanager\.com|gtag\/js/.test(fs.readFileSync(file, 'utf8'))).map(relative);
    expect(offenders).toEqual([]);
  });

  it('loads the meshlib.io consent banner on every page built with html_header.html', () => {
    // The github.io redirect script marks the pages that use our header.
    const headerPages = files.filter((file) => fs.readFileSync(file, 'utf8').includes("currentHost === 'meshinspector.github.io'"));
    expect(headerPages.length).toBeGreaterThan(0);
    const missing = headerPages.filter((file) => !fs.readFileSync(file, 'utf8').includes('<script src="/consent/embed.js" defer></script>')).map(relative);
    expect(missing).toEqual([]);
  });

  it('keeps doxygen_crawl.html out of the index', () => {
    const crawlPages = files.filter((file) => path.basename(file) === 'doxygen_crawl.html');
    expect(crawlPages.length).toBeGreaterThan(0);
    const missing = crawlPages.filter((file) => {
      const robots = cheerio.load(fs.readFileSync(file, 'utf8'))('meta[name="robots"]').attr('content') || '';
      return !robots.includes('noindex');
    }).map(relative);
    expect(missing).toEqual([]);
  });

  it('gives every indexable page a meta description of at most 160 characters', () => {
    expect(indexable.length).toBeGreaterThan(0);
    const problems = indexable.map((file) => {
      const description = cheerio.load(fs.readFileSync(file, 'utf8'))('meta[name="description"]').attr('content');
      if (!description) return `${relative(file)}: no description`;
      if (description.length > 160) return `${relative(file)}: ${description.length} characters`;
      return null;
    }).filter(Boolean);
    expect(problems).toEqual([]);
  });

  it('lists exactly the indexable pages in sitemap.xml', () => {
    const sitemap = fs.readFileSync(path.join(htmlDir, 'sitemap.xml'), 'utf8');
    const listed = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]).sort();
    const expected = indexable.map((file) => `${urlPrefix.replace(/\/$/, '')}/${relative(file)}`).sort();
    expect(listed).toEqual(expected);
  });
});
