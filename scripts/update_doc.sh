#!/bin/sh
# Use "MeshLib/local" as default if $1 is not provided
TARGET_DIR="${1:-MeshLib/local}"

bash ./scripts/pre.sh "$TARGET_DIR"
doxygen ./Doxyfile > log.txt
bash ./scripts/post.sh "$TARGET_DIR"