#!/bin/sh
set -eo pipefail

# Use "MeshLib" as default if $1 is not provided
TARGET_DIR="${1:-MeshLib}"

# Remove the html directory within the target directory
rm -rf "$TARGET_DIR/html"

# generate customizable HTML parts
doxygen -w html html_header.html html_footer.html html_stylesheet.css DoxyfileMain

# inject Google Analytics code into the HTML header
sed \
    -e "/<head>/r scripts/analytics/html_head.html" \
    -e "/<body>/r scripts/analytics/html_body.html" \
    -i html_header.html

# Additional insertion for html_head_canonical.html if $TARGET_DIR is "MeshLib"
if [ "$TARGET_DIR" == "MeshLib" ]; then
    sed \
        -e "/<head>/r scripts/analytics/html_head_canonical.html" \
        -i html_header.html
fi

# add doxygen-awesome scripts
sed -e "/<\/head>/q" html_header.html > html_header.html.tmp
sed -e "/<\/head>/d" -i html_header.html.tmp
cat scripts/doxygen-awesome-scripts.html >> html_header.html.tmp
sed -n -e "/<\/head>/,$ p" html_header.html >> html_header.html.tmp
rm html_header.html
mv html_header.html.tmp html_header.html

sed \
    -e "s/HTML_HEADER\s*=.*/HTML_HEADER = html_header.html/" \
    -i.bak Doxyfile
sed -e "s|OUTPUT_DIRECTORY\s*=.*|OUTPUT_DIRECTORY = $1|" -i Doxyfile

URL=""
if [ "$TARGET_DIR" == "MeshLib" ]; then
    URL="meshlib.io/$TARGET_DIR"
elif [ "$TARGET_DIR" == "MeshLib/dev" ]; then
    URL="meshinspector.github.io/$TARGET_DIR"
elif [ "$TARGET_DIR" == "MeshLib" ]; then
    URL="127.0.0.1:8000/$TARGET_DIR"
fi

if [ -f ../MeshLib/scripts/doxygen/generate_doxygen_layout.sh ]; then
    MODULES=(Py Cpp Main)
    for MODULE in ${MODULES[*]}
    do
        rm -rf ${TARGET_DIR}/${MODULE}/html
        ../MeshLib/scripts/doxygen/generate_doxygen_layout.sh $MODULE $URL
        # force Doxygen to use the custom HTML header
        sed -e "s|HTML_HEADER\s*=.*|HTML_HEADER = html_header.html|" -i.bak Doxyfile${MODULE}
        # force Doxygen to use the custom output directory
        sed -e "s|OUTPUT_DIRECTORY\s*=.*|OUTPUT_DIRECTORY = ${TARGET_DIR}/${MODULE}|" -i Doxyfile${MODULE}
    done
fi