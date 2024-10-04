#!/bin/sh

# remove temporary files
rm html_header.html html_footer.html html_stylesheet.css

# restore Doxyfile
[[ -f Doxyfile.bak ]] && mv Doxyfile.bak Doxyfile
