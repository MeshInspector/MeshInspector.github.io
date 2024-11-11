#!/bin/sh

# Remove temporary files
rm html_header.html html_footer.html html_stylesheet.css

# Restore Doxyfile
[[ -f Doxyfile.bak ]] && mv Doxyfile.bak Doxyfile

# Define default values if arguments are not provided
TARGET_DIR="${1:-MeshLib}"
URL_PREFIX="${2:-https://meshlib.io/documentation}"

# Conditionally run update_canonical.sh if TARGET_DIR is not "MeshLib/dev"
if [ "$TARGET_DIR" != "MeshLib/dev" ]; then
  ./scripts/update_canonical.sh "$TARGET_DIR/html" "$URL_PREFIX"
fi