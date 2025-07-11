#!/bin/bash

# Run the script only from MeshInspector.github.io directory
ROOT_DIR="."

# Define source folders
SOURCE_DIR="custom_search"

# Set destination folders
if [ $# -lt 1 ]; then
    echo "[INFO] Target directory is not specified. Used \"MeshLib/local\""
fi
# Use "MeshLib/local" as default if $1 is not provided
TARGET_DIR="${1:-MeshLib/local}"

SUB_DIR_LIST=(
    "html"
    "html/Cpp"
    "html/Py"
)

function combine_js {
    if [ $# -ne 1 ]; then
        return 1;
    fi

    TYPE="$1" # from TYPES_LIST
    RESULT_FILE_NAME="${WORK_DIR}/${TYPE}"
    RESULT_FILE_TMP="${RESULT_FILE_NAME}.tmp"
    RESULT_FILE="${RESULT_FILE_NAME}.js"

    [ -f "${RESULT_FILE}" ] && rm "${RESULT_FILE}"
    echo "var searchData=" > "${RESULT_FILE_TMP}"
    echo "[" >> "${RESULT_FILE_TMP}"

    find "${WORK_DIR}" -type f -name "${TYPE}_*.js" | while read -r FILE; do
        # skip first 2 and last 1 string from each file
        tail -n +3 "${FILE}" | head -n -1 >> "${RESULT_FILE_TMP}"
        rm "${FILE}"
    done

    echo "];" >> "${RESULT_FILE_TMP}"
    sed -i 's/]]$/]],/g' "${RESULT_FILE_TMP}"
    mv "${RESULT_FILE_TMP}" "${RESULT_FILE}"
}

for SUB_DIR in "${SUB_DIR_LIST[@]}"; do
    WORK_DIR="${TARGET_DIR}/${SUB_DIR}/search"
    
    # Define TYPES_LIST array
    LINE_BEGIN=`grep -n "indexSectionNames" "${WORK_DIR}/searchdata.js" | cut -d: -f1`
    tail -n +$((LINE_BEGIN + 2)) "${WORK_DIR}/searchdata.js" > ${WORK_DIR}/tmp
    LINE_END=`grep -n -m1 "};" "${WORK_DIR}/tmp" | cut -d: -f1`
    head -n $((LINE_END - 1)) "${WORK_DIR}/tmp" > "${WORK_DIR}/tmp2"
    sed -n 's/.*"\([^"]*\)".*/\1/p' "${WORK_DIR}/tmp2" > "${WORK_DIR}/tmp"
    TYPES_LIST=($(<"${WORK_DIR}/tmp"))
    rm "${WORK_DIR}/tmp" "${WORK_DIR}/tmp2"

    for TYPE in "${TYPES_LIST[@]}"; do
        # 1. Combine *.js files
        combine_js "${TYPE}"
    done

    # 2. patch serarch.js
    cp "${SOURCE_DIR}/search.js" "${WORK_DIR}"
    echo "${SOURCE_DIR}/custom_search.js" >> "${SOURCE_DIR}/search.js"
done

