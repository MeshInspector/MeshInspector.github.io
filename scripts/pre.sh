#!/bin/sh
set -eo pipefail

# generate customizable HTML parts
doxygen -w html html_header.html html_footer.html html_stylesheet.css Doxyfile

# inject Google Analytics code into the HTML header
sed \
    -e "/<head>/r scripts/analytics/html_head.html" \
    -e "/<body>/r scripts/analytics/html_body.html" \
    -i html_header.html

# force Doxygen to use the custom HTML header
sed \
    -e "s/HTML_HEADER\s*=.*/HTML_HEADER = html_header.html/" \
    -i.bak Doxyfile
