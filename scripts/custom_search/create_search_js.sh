#!/bin/bash

# 0. check doxygen version
if [[ ! $(doxygen --version) =~ ^1\.11\. ]]; then
    echo "Wrong doxygen version! Install version 1.11.0!"
fi

exit


# 1. create empty doxygen documentation and copy original searcj.js
SCRIPT_DIR=$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")

cd $SCRIPT_DIR

echo "PROJECT_NAME = MyProject" > Doxyfile
echo "OUTPUT_DIRECTORY = docs" >> Doxyfile
echo "INPUT = ./" >> Doxyfile
echo "GENERATE_LATEX = NO" >> Doxyfile
echo "QUIET = YES" >> Doxyfile

doxygen Doxyfile

rm Doxyfile

cp ./docs/html/search/search.js ./
cp ./search.js ./search.js.orig
rm -rf ./docs


# patch 
patch ./search.js < ../search.patch