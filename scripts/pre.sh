#!/bin/bash
set -eo pipefail

# generate customizable HTML parts
doxygen -w html html_header.html html_footer.html html_stylesheet.css Doxyfile

# inject Google Analytics code into the HTML header
sed \
    -e "/<head>/r scripts/analytics/html_head.html" \
    -e "/<body>/r scripts/analytics/html_body.html" \
    -i html_header.html

# add doxygen-awesome scripts
sed -e "/<\/head>/q" html_header.html > html_header.html.tmp
sed -e "/<\/head>/d" -i html_header.html.tmp
cat scripts/doxygen-awesome-scripts.html >> html_header.html.tmp
sed -n -e "/<\/head>/,$ p" html_header.html >> html_header.html.tmp
rm html_header.html
mv html_header.html.tmp html_header.html

# force Doxygen to use the custom HTML header
sed \
    -e "s/HTML_HEADER\s*=.*/HTML_HEADER = html_header.html/" \
    -i.bak Doxyfile

# force Doxygen to use the custom output directory
if [ $1 ] 
then
sed -e "s|OUTPUT_DIRECTORY\s*=.*|OUTPUT_DIRECTORY = $1|" -i Doxyfile
fi