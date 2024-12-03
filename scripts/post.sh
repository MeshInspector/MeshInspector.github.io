#!/bin/sh

# Remove temporary files
rm html_header.html html_footer.html html_stylesheet.css

# Restore Doxyfile
[[ -f Doxyfile.bak ]] && mv DoxyfileMain.bak Doxyfile
[[ -f DoxyfileMain.bak ]] && mv DoxyfileMain.bak DoxyfileMain
[[ -f DoxyfileCpp.bak ]] && mv DoxyfileCpp.bak DoxyfileCpp
[[ -f DoxyfilePy.bak ]] && mv DoxyfilePy.bak DoxyfilePy

# Define default values if arguments are not provided
TARGET_DIR="${1:-MeshLib}"
URL_PREFIX="${2:-https://meshlib.io/documentation}"

BASE_DIR=$(realpath $(dirname "$0"))

"$BASE_DIR/update_logo_link.sh" "$TARGET_DIR/html" "https://meshlib.io/"

# Conditionally run update_canonical.sh if TARGET_DIR is not "MeshLib/dev"
if [ "$TARGET_DIR" == "MeshLib" ]; then
  "$BASE_DIR/update_canonical.sh" "$TARGET_DIR/html" "$URL_PREFIX"
fi