import os
import re
import json
from pathlib import Path
from typing import List
from collections import defaultdict

class DoxygenSearchDataProcessor:
    def __init__(self, root_dir="MeshLib/local"):
        dirs = ["Cpp", "Py", "C", "Csharp"]
        self.root_dir = Path(root_dir) / "html"
        self.all_entries = {}

        self.all_entries["Main"] = {
                'dir': "",
                'file': self.root_dir / "search" / "all.js",
                'entries': []
        }
        
        for dir in dirs:
            self.all_entries[dir] = {
                    'dir': dir,
                    'file': self.root_dir / dir / "search" / "all.js",
                    'entries': []
            }

    def check_all_files(self):
        for key in self.all_entries:
            module = self.all_entries[key]
            if not module['file'].exists():
                print(f"Error 1: '{self.root_dir}' does not exist")
                return False
        return True

    def parse_js_array(self, content):
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

    def update_link(self, link, target_module, source_module):
        if not link.startswith('../'):
            return link
        
        if target_module == source_module:
            return link
        
        # remove '../' in link head
        rel_path = link[3:]
        
        if target_module == "Main":
            return f"../{source_module}/{rel_path}"
        elif source_module == "Main":
            return f"../../{rel_path}"
        else:
            return f"../../{source_module}/{rel_path}"
    
    def update_link_title(self, link_title, module):
        if module == "Cpp":
            if len(link_title) > 0:
                return "C++: " + link_title
            else:
                return "C++"
        elif module == "Py":
            first_word = link_title.split('.', 1)[0] + "."
            if len(link_title) > 0:
                return "Python: " + link_title
            else:
                return "Python"
        elif module == "C":
            if len(link_title) > 0:
                return "C: " + link_title
            else:
                return "C"
        elif module == "Csharp":
            if len(link_title) > 0:
                return "C#: " + link_title
            else:
                return "C#"
        else:
            return link_title

    def load_entries(self):
        for key in self.all_entries:
            module = self.all_entries[key]
            file_path = module['file']
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            module['entries'] = self.parse_js_array(content)
            print(f"Loaded {len(module['entries'])} entries from {key}")
    
    def save_entries(self, module, entries):
        # Save entries in js file
        module_data = self.all_entries[module]
        file_path = module_data['file']
        #file_path = file_path.with_name(file_path.stem + "_new" + file_path.suffix)
        # generate js code
        js_content = f"var searchData = {json.dumps(entries, indent=None)};"
        
        # Save
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(js_content)
        
        print(f"Saved {len(entries)} entries in {file_path}")
        
    def create_entry(self, name_id, title, indexes, module):
        new_entry = [name_id, [title]]
        module_keys = list(self.all_entries.keys())
        for i, idx in enumerate(indexes):
            if idx == None:
                continue
            source_module = module_keys[i]
            links = [self.all_entries[source_module]['entries'][idx][1][1].copy()] # add only one link for one name from one module
            for link_data in links:
                link_data[0] = self.update_link(link_data[0], module, source_module)
                link_data[2] = self.update_link_title(link_data[2], source_module)
                new_entry[1].append(link_data)
        return new_entry

    def process(self):
        self.load_entries()

        print(f"Prepare all unique pairs name_id + title")
        modules_count = len(self.all_entries)
        all_names = {}
        for module_idx, module_key in enumerate(self.all_entries):
            entries = self.all_entries[module_key]['entries']
            for entry_idx, entry in enumerate(entries):
                name_title = entry[0].rsplit('_', 1)[0] + "||" + entry[1][0]
                if all_names.get(name_title) == None:
                    indexes = [None] * modules_count
                    indexes[module_idx] = entry_idx
                    all_names[name_title] = indexes
                else:
                    indexes = all_names.get(name_title)
                    indexes[module_idx] = entry_idx
                    all_names[name_title] = indexes

        all_names = dict(sorted(all_names.items()))
        print(f"Finded {len(all_names)} unique pairs")

        for module_name in self.all_entries:
            print(f"Process {module_name}...")
            new_all_entries = []
            first_char = ''
            counter = 0
            for name in all_names:
                if len(name) == 0:
                    continue
                indexes = all_names[name]
                if name[0] != first_char:
                    first_char = name[0]
                    counter = 0
                else:
                    counter += 1
                name_id = f"{name.split('||', 1)[0]}_{counter}"
                new_all_entries.append(self.create_entry(name_id, name.split('||', 1)[1], indexes, module_name))

            self.save_entries(module_name, new_all_entries)

        print("Success!")
               
if __name__ == "__main__":
    import sys
    
    # Set default dir
    root_dir = "MeshLib/local"
    if len(sys.argv) > 1:
        root_dir = sys.argv[1]

    processor = DoxygenSearchDataProcessor( root_dir )
    processor.process()