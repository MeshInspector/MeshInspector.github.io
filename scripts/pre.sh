#!/bin/bash
set -eo pipefail

if [ $# -lt 1 ]; then
    echo "[INFO] Target directory is not specified. Used \"MeshLib/local\""
fi

# Use "MeshLib" as default if $1 is not provided
TARGET_DIR="${1:-MeshLib/local}"

# create backup html_header.html
cp html_header.html html_header.html.bak

if [ "$TARGET_DIR" == "MeshLib" ]; then
    # Add canonical link only for main distribution
    sed -e 's|<\!-- Canonical Link -->|<link rel=\"canonical\" href="" />|' -i html_header.html
    # Add googlebot noindex for main distribution
    sed -e 's|<\!-- No Index Meta -->|<meta name=\"googlebot\" content=\"noindex, follow\">|' -i html_header.html
else
    # Add complete noindex for dev distribution
    sed -e 's|<\!-- No Index Meta -->|<meta name=\"robots\" content=\"noindex, nofollow\">|' -i html_header.html
fi

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
