#!/bin/bash

# Define default values if arguments are not provided
TARGET_DIR="${1:-MeshLib/local}"
URL_PREFIX="${2:-https://meshlib.io/documentation}"

BASE_DIR=$(realpath $(dirname "$0"))

"$BASE_DIR/update_logo_link.sh" "$TARGET_DIR/html" "https://meshlib.io/"

# Conditionally run update_canonical.sh if TARGET_DIR is not "MeshLib/dev"
if [ "$TARGET_DIR" == "MeshLib" ]; then
  "$BASE_DIR/update_canonical.sh" "$TARGET_DIR/html" "$URL_PREFIX"
  "$BASE_DIR/remove_noindex.sh" "$TARGET_DIR/html" "whitelist.txt"
  # After remove_noindex.sh: descriptions and sitemap.xml go to the pages it left indexable
  python3 "$BASE_DIR/seo_postprocess.py" "$TARGET_DIR/html" --crawl-robots "noindex, follow" \
    --whitelist "whitelist.txt" --descriptions "descriptions.txt" --url-prefix "$URL_PREFIX"
else
  # dev and local builds are noindex, nofollow throughout (pre.sh); so are their crawl pages
  python3 "$BASE_DIR/seo_postprocess.py" "$TARGET_DIR/html" --crawl-robots "noindex, nofollow"
fi
