import os

def find_files(base_dir, extensions, exclude_files, exclude_dirs):
    for root, dirs, files in os.walk(base_dir):
        if root.startswith(exclude_dirs):
            continue
            
        for file in files:
            if not file.endswith(extensions):
                continue
            file_path = os.path.join(root, file)
            if file_path.startswith(exclude_files):
                continue
            else:
                yield file_path

def process_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    #print(f"Procces file '{filename}' ...")
    flag_close_ingroup = False
    flag_skip_line = False
    new_lines = []
    
    for line in lines:
        if "\\defgroup" in line:
            return
        
        if "\\addtogroup" in line:
            return

    for i, line in enumerate(lines):
        if flag_skip_line:
            flag_skip_line = False
            continue

        new_lines.append(line)

        if i >= len(lines) - 1:
            continue

        current_line = lines[i].strip()
        next_line = lines[i + 1].strip()
        
        if current_line == "namespace MR" and next_line == "{":
            new_lines.append(lines[i + 1])
            flag_skip_line = True

            new_lines.append("/// \\addtogroup GeneralGroup\n")
            new_lines.append("/// \\{\n\n")

    with open(filename, 'w', encoding='utf-8') as f:
        for line in new_lines:
            f.write(line)

def main():
    directory = "../MeshLib/source"
    extensions = ".h"
    exclude_files = (
        # Undocumented files
        '../MeshLib/source/MRMesh/miniply.h',
        '../MeshLib/source/MRMesh/MRphmap.h'
        # Properly documented groups
        #'../MeshLib/source/MRMesh/MRBase64.h',
        #'../MeshLib/source/MRMesh/MRIteratorRange.h.h'
    )
    exclude_dirs = (
        '../MeshLib/source/OpenCTM',
        '../MeshLib/source/MRDotNet',
        '../MeshLib/source/MRMeshC',
        '../MeshLib/source/MRTest',
        '../MeshLib/source/MeshLibC2',
        '../MeshLib/source/imgui'
    )

    for file_path in find_files(directory, extensions, exclude_files, exclude_dirs):
        process_file(file_path)

if __name__ == '__main__':
    main()
