import re
import json
import sys
from pathlib import Path

def find_html_files(directory):
    directory = Path(directory)
    
    html_files = list(directory.glob("*.html"))
    
    for subdir in directory.iterdir():
        if subdir.is_dir():
            html_files.extend(subdir.glob("*.html"))
    
    html_files.sort()
    return html_files

def check_file_links(html_file):
    html_file_dir = Path(html_file).parent
    with open(html_file, 'r', encoding='utf-8') as file:
        content = file.read()
    
    pattern = r'href=[\'"]([^\'"]*\.html?[^\'"]*)[\'"]'
    
    links = re.findall(pattern, content, re.IGNORECASE)

    for link in links:
        if link[0:4] == "http":
            continue
        else:
            link_splitted = link.split('#')
            clear_link = link_splitted[0]

            if clear_link == 'module__nullptr.html':
                continue

            #anchor = link_splitted[1]
            link_path = html_file_dir / clear_link
            if not link_path.is_file():
                print(f"Fail! In file '{html_file}' bad link '{link}'")
                return False
    return True

def check_all_files(root_dir):
    print("Check links in html files")
    files = find_html_files(root_dir)
    print(f"Files found: {len(files)}")

    for file in files:
        if Path(file).name == 'doxygen_crawl.html':
            continue
        if not check_file_links(file):
            sys.exit(1)
    print("All files are checked")
    print("Success!")


def parse_js_array(content):
    """Extract array from JS-file"""
    # Search array begin after '='
    start = content.find('=')
    if start == -1:
        return []
    
    # Find array begin '['
    start = content.find('[', start)
    if start == -1:
        return []
    
    # Find array end (last ']' before ';')
    end = content.rfind(']')
    if end == -1:
        return []
    
    array_str = content[start:end+1]
    
    # Parse as JSON
    try:
        return json.loads(array_str)
    except json.JSONDecodeError:
        # If pure JSON is not parsed, we try to get rid of JS-specific constructs.
        # Replacing single quotes with double quotes for JSON
        array_str = re.sub(r"'", '"', array_str)
        # Removing the extra commas
        array_str = re.sub(r',\s*]', ']', array_str)
        array_str = re.sub(r',\s*}', '}', array_str)
        try:
            return json.loads(array_str)
        except:
            print(f"Couldn't parse the JS array")
            return []

def check_search_links(file_path):
    print(f"Process file: {file_path}")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    data = parse_js_array(content)
    print(f"Entries found: {len(data)}")
    for entry in data:
        for link_data in entry[1][1:]:
            link_splitted = link_data[0].split('#')
            clear_link = link_splitted[0]
            link_path = file_path.parent / clear_link
            if not link_path.is_file():
                print(f"In file '{file_path}' bad link '{link_data[0]}'")
                return False
    return True

def check_all_search(root_dir):
    print("Check links in search data")
    dirs = ["Cpp", "Py", "C", "Csharp"]

    if not check_search_links(Path(root_dir) / "search/all.js"):
        sys.exit(1)
    for dir in dirs:
        if not check_search_links(Path(root_dir) / dir / "search/all.js"):
            sys.exit(1)
    print("All search data files are checked")
    print("Success!")

if __name__ == '__main__':
    root_dir = './MeshLib/local/html'
    if len(sys.argv) > 1:
        root_dir = sys.argv[1]
    root_dir_path = Path(root_dir) / "html"
    check_all_files(root_dir_path)
    check_all_search(root_dir_path)
    sys.exit(0)