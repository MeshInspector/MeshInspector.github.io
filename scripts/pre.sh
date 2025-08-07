#!/bin/bash
set -eo pipefail

if [ $# -lt 1 ]; then
    echo "[INFO] Target directory is not specified. Used \"MeshLib/local\""
fi

# Use "MeshLib" as default if $1 is not provided
TARGET_DIR="${1:-MeshLib/local}"

# create backup html_header.html
cp html_header.html html_header.html.bak

# Additional insertion for html_head_canonical.html if $TARGET_DIR is "MeshLib"
if [ "$TARGET_DIR" == "MeshLib" ]; then
    sed \
        -e "/<head>/r scripts/analytics/html_head_canonical.html" \
        -i html_header.html
fi

# make no-index html_header.html for API parts of documentation
cp html_header.html html_header_main.html
sed -e 's|<\!-- No Index Part -->|<meta name=\"robots\" content=\"noindex, nofollow\">|' -i html_header.html

if [ ! -f ../MeshLib/scripts/doxygen/generate_doxygen_layout.sh ]; then
    echo "[ERROR] Can not found script to generate doxygen layout files"
    exit 1
fi

# force Doxygen to use the custom output directory
sed -e "s|OUTPUT_DIRECTORY\s*=.*|OUTPUT_DIRECTORY = ${TARGET_DIR}|" -i.bak DoxyfileBase

MODULES=(Main Cpp Py C)
for MODULE in ${MODULES[*]}
do
    ../MeshLib/scripts/doxygen/generate_doxygen_layout.sh $MODULE
done
