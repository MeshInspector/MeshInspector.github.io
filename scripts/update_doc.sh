#!/bin/bash

CHECK_WARNINGS=true

if [ $# -lt 1 ]; then
    echo "[INFO] Target directory is not specified. Used \"MeshLib/local\""
fi

MODULES=(Main Cpp Py C)
if [ $# -eq 2 ]; then
    MODULES=($(<$2))
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

# generate tag files
for MODULE in ${MODULES[*]}
do
    cp Doxyfile${MODULE} Doxyfile${MODULE}Tag
    echo "GENERATE_TAGFILE = MeshLib/MeshLib${MODULE}.tag" >> Doxyfile${MODULE}Tag
    echo "========== ${MODULE}" >> log_tag.txt
    echo "========== ${MODULE}" >> log_tag_error.txt
    doxygen ./Doxyfile${MODULE}Tag 1>> log_tag.txt 2>> log_tag_error.txt
    rm Doxyfile${MODULE}Tag
done
rm -rf ${TARGET_DIR}/html/*

# check doxygen error (bad doxyfile, missing sources) 
if [ "$CHECK_WARNINGS" = true ] && grep -q "^warning: " log_tag_error.txt; then
    echo "ERROR: documentation generation error"
    cat log_tag_error.txt
    exit 1
fi

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
    echo "========== ${MODULE}" >> log.txt
    echo "========== ${MODULE}" >> log_error.txt
    doxygen ./Doxyfile${MODULE}Tag 1>> log.txt 2>> log_error.txt
    rm Doxyfile${MODULE}Tag
done

# check doxygen error (bad doxyfile, missing sources)
if [ "$CHECK_WARNINGS" = true ] && grep -q "^warning: " log_error.txt; then
    echo "ERROR: documentation generation error"
    cat log_error.txt
    exit 1
fi

# remove tag files
for MODULE in ${MODULES[*]}
do
    rm -f MeshLib/MeshLib${MODULE}.tag
done

./scripts/update_search.sh "$TARGET_DIR"
./scripts/restore_files.sh
./scripts/post.sh "$TARGET_DIR"
