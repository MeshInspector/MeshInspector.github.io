#!/bin/bash

if [ $# -lt 1 ]; then
    echo "[INFO] Target directory is not specified. Used \"MeshLib/local\""
fi

# Use "MeshLib/local" as default if $1 is not provided
TARGET_DIR="${1:-MeshLib/local}"

#preparing files
bash ./scripts/pre.sh "$TARGET_DIR"
if [ $? -ne 0 ]; then
    echo "[ERROR] Problem in preparing files. Abort operation."
    exit 1
fi

# create output directory
mkdir -p ${TARGET_DIR}/html
# clear output directory
rm -rf ${TARGET_DIR}/html/*

MODULES=(Main Cpp Py C)
# generate tag files
for MODULE in ${MODULES[*]}
do
    cp Doxyfile${MODULE} Doxyfile${MODULE}Tag
    echo "GENERATE_TAGFILE = MeshLib/MeshLib${MODULE}.tag" >> Doxyfile${MODULE}Tag
    doxygen ./Doxyfile${MODULE}Tag 1 >> log_tag.txt
    rm Doxyfile${MODULE}Tag
done
rm -rf ${TARGET_DIR}/html/*

# final generation of documentation
for MODULE in ${MODULES[*]}
do
    cp Doxyfile${MODULE} Doxyfile${MODULE}Tag
    DIR=".."
    if [ "$MODULE" = "Main" ]; then
        DIR="."
    fi
    for MODULE_2 in ${MODULES[*]}
    do
        if [ "$MODULE" = "$MODULE_2" ]; then
            continue
        elif [ "$MODULE_2" = "Main" ]; then
            echo "TAGFILES += MeshLib/MeshLib${MODULE_2}.tag=../" >> Doxyfile${MODULE}Tag
        else
            echo "TAGFILES += MeshLib/MeshLib${MODULE_2}.tag=${DIR}/${MODULE_2}/" >> Doxyfile${MODULE}Tag
        fi
    done
    doxygen ./Doxyfile${MODULE}Tag 1 >> log.txt    
    rm Doxyfile${MODULE}Tag
done

# remove tag files
for MODULE in ${MODULES[*]}
do
    rm -f MeshLib/MeshLib${MODULE}.tag
done

./scripts/update_search.sh "$TARGET_DIR"
./scripts/restore_files.sh
./scripts/post.sh "$TARGET_DIR"
