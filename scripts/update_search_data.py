import os
import re
import json
from pathlib import Path
from typing import List
from collections import defaultdict

class DoxygenSearchDataProcessor:
    def __init__(self, root_dir="MeshLib/local"):
        #self.lang = []
        self.lang = ["Cpp", "Csharp"] 
        #self.modules = ["Cpp", "Python", "C", "Csharp"]
        self.root_dir = Path(root_dir) / "html"
        self.all_entries = {}

        self.all_entries["Main"] = {
                'module': "Main",
                'file': self.root_dir / "search" / "all.js",
                'entries': []
        }
        
        for lang in self.lang:
            self.all_entries[lang] = {
                    'module': lang,
                    'file': self.root_dir / lang / "search" / "all.js",
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

    def get_entry_key(self, entry):
        #Get key for compare entries
        if not isinstance(entry, list) or len(entry) < 2:
            return None
        
        entry_id = entry[0]
        entry_data = entry[1]
        
        if not isinstance(entry_data, list) or len(entry_data) < 1:
            return None
        
        # Extracting id_name from id (the part before the last underscore)
        if '_' in entry_id:
            some_name = entry_id.rsplit('_', 1)[0]
        else:
            some_name = entry_id
        
        entry_text = str(entry_data[0])
        
        return f"{some_name}||{entry_text}"

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
            return "C++:  " + link_title[4:] # remove "MR::"
        elif module == "Python":
            return "Python:  " + link_title.split('.', 1)[1]
        elif module == "C":
            return "C:  " + link_title
        elif module == "Csharp":
            return "C#:  " + link_title[3:] # remove "MR."
        else:
            return link_title


    def load_entries(self):
        for key in self.all_entries:
            module = self.all_entries[key]
            file_path = module['file']
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            module['entries'] = self.parse_js_array(content)
            print(f"Loaded {len(module['entries'])} entries from {module['module']}")

    def merge_entries(self, target_module, source_module, target_entries, source_entries):
        # Create index of existing entries
        entry_index = {}
        for i, entry in enumerate(target_entries):
            key = self.get_entry_key(entry)
            if key:
                entry_index[key] = i
        
        # Process data from source
        for entry in source_entries:
            key = self.get_entry_key(entry)
            if not key:
                continue
            
            # Copy entry for modification
            new_entry = json.loads(json.dumps(entry))  # deep copy
            
            if key in entry_index:
                # Entry already exist - add links
                target_idx = entry_index[key]
                target_entry = target_entries[target_idx]
                
                # Collect existing links
                existing_links = set()
                for link_data in target_entry[1][1:]:
                    if isinstance(link_data, list) and len(link_data) == 3:
                        existing_links.add(link_data[0])
                
                # Add new link data from source entry
                for link_data in new_entry[1][1:]:
                    if isinstance(link_data, list) and len(link_data) == 3:
                        original_link = link_data[0]
                        normalized_link = self.update_link(original_link, target_module, source_module)
                        
                        if normalized_link not in existing_links:
                            new_link_data = list(link_data)
                            new_link_data[0] = normalized_link
                            new_link_data[2] = self.update_link_title(link_data[2], source_module)
                            target_entry[1].append(new_link_data)
            else:
                # New entry - normalize all links
                for link_data in new_entry[1][1:]:
                    if isinstance(link_data, list) and len(link_data) == 3:
                        original_link = link_data[0]
                        normalized_link = self.update_link(original_link, target_module, source_module)
                        link_data[0] = normalized_link
                        link_data[2] = self.update_link_title(link_data[2], source_module)
                
                target_entries.append(new_entry)
                # update index
                new_key = self.get_entry_key(new_entry)
                if new_key:
                    entry_index[new_key] = len(target_entries) - 1
    
    def save_entries(self, module, entries):
        # Save entries in js file
        module_data = self.all_entries[module]
        file_path = module_data['file']
        
        # generate js code
        js_content = f"var searchData = {json.dumps(entries, indent=None)};"
        
        # Save
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(js_content)
        
        print(f"Saved {len(entries)} entries in {file_path}")
        
    def process(self):
        self.load_entries()
        
        modules = list(self.all_entries.keys())
        
        for target_module in modules:
            print(f"\nProcess {target_module}...")
            
            target_entries = json.loads(json.dumps(
                self.all_entries[target_module]['entries']
            )) # deep copy
            
            for source_module in modules:
                if source_module == target_module:
                    continue
                
                print(f"  Add entries from {source_module}")
                self.merge_entries(
                    target_module,
                    source_module,
                    target_entries,
                    self.all_entries[source_module]['entries']
                )
            
            # Save result
            self.save_entries(target_module, target_entries)
        
        print("\nSuccess!")

# Example usage
if __name__ == "__main__":
    import sys
    
    # Set root dir
    root_dir = "MeshLib/local"
    if len(sys.argv) > 1:
        root_dir = sys.argv[1]

    # With default directory
    processor = DoxygenSearchDataProcessor( root_dir )
    processor.process()