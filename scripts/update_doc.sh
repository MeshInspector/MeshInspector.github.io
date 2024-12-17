#!/bin/bash

if [ $# -lt 1 ]; then
    echo "[INFO] Target directory is not specified. Used \"MeshLib\""
fi

# Use "MeshLib/local" as default if $1 is not provided
TARGET_DIR="${1:-MeshLib}"

#preparing files
bash ./scripts/pre.sh "$TARGET_DIR"
if [ $? -ne 0 ]; then
    echo "[ERROR] Problem in preparing files. Abort operation."
    exit 1
fi

#create output directory
mkdir -p ${TARGET_DIR}/html
#clear output directory
rm -rf ${TARGET_DIR}/html/*

MODULES=(Py Cpp Main)
#generate tag files
for MODULE in ${MODULES[*]}
do
    sed -e "s|GENERATE_TAGFILE\s*=.*|GENERATE_TAGFILE = MeshLib/MeshLib${MODULE}.tag|" -i Doxyfile${MODULE}
    doxygen ./Doxyfile${MODULE} 1 >> log_tag.txt
    sed -e "s|GENERATE_TAGFILE\s*=.*|GENERATE_TAGFILE =|" -i Doxyfile${MODULE}
done
rm -rf ${TARGET_DIR}/html/*

#final generation of documentation
TAG_PATHS=(./Py ./Cpp ../)
for MODULE in ${MODULES[*]}
do
    STR=""
    for (( i=0; i < 3; i++ ))
    do
        if [ ! "${MODULES[$i]}" = "$MODULE" ]; then
            STR="$STR MeshLib/MeshLib${MODULES[$i]}.tag=${TAG_PATHS[$i]}"
        fi
    done
    sed -e "s|TAGFILES\s*=.*|TAGFILES = ${STR}|" -i Doxyfile${MODULE}
    doxygen ./Doxyfile${MODULE} 1 >> log.txt
done

./scripts/restore_files.sh
./scripts/post.sh "$TARGET_DIR"
