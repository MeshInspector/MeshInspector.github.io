#!/bin/bash

CHECK_WARNINGS=true

if [ $# -lt 1 ]; then
    echo "[INFO] Target directory is not specified. Used \"MeshLib/local\""
    CHECK_WARNINGS=false
fi

MODULES=(Main Cpp Py C Csharp)
if [ $# -eq 2 ]; then
    MODULES=($(<$2))
fi

# Use "MeshLib/local" as default if $1 is not provided
TARGET_DIR="${1:-MeshLib/local}"

prepare_source_files() {
    CURRENT_DIR=$(pwd)
    cd ../MeshLib/
    find source -name '*.h' -exec perl -pe 's/^\s*\}\s*\/\/\s*namespace.*$/}/' -i {} \;
    find source -name '*.h' -exec perl -pe 's|(?<!/)//(?![/!]) ?|/// |g;s|/\*(?![\*!]) ?|/** |g' -i {} \;
    cd "$CURRENT_DIR"
    python3 ./scripts/generate_default_group.py
}

prepare_setting_files() {
    echo "1.prepare_setting_files"
    bash ./scripts/pre.sh "$TARGET_DIR"
    if [ $? -ne 0 ]; then
        echo "[ERROR] Problem in preparing files. Abort operation."
        return 1
    fi
}

prepare_output_directory() {
    echo "2.prepare_output_directory"
    mkdir -p ${TARGET_DIR}/html
    # clear output directory
    rm -rf ${TARGET_DIR}/html/*
}

clear_log_files() {
    echo "3.clear_log_files"
    rm log*.txt
}

generate_documentation_simple() {
    echo "4.generate_documentation_simple"
    # final generation of documentation
    for MODULE in ${MODULES[*]}
    do
        cp Doxyfile${MODULE} Doxyfile${MODULE}Tag
        if [ "$MODULE" != "Main" ]; then
            echo "GENERATE_XML = YES" >> Doxyfile${MODULE}Tag
            echo "XML_OUTPUT = ./xml_${MODULE}" >> Doxyfile${MODULE}Tag
        fi
        if [ "$MODULE" = "Cpp" ]; then
            echo "STRIP_FROM_INC_PATH = $(realpath ../MeshLib/source)" >> Doxyfile${MODULE}Tag
            echo "STRIP_FROM_PATH = $(realpath ../MeshLib/source)" >> Doxyfile${MODULE}Tag
        fi
        echo "========== ${MODULE}" >> log.txt
        echo "========== ${MODULE}" >> log_error.txt
        start=$(date +%s.%N)
        doxygen -d time ./Doxyfile${MODULE}Tag 1>> log.txt 2>> log_error.txt
        end=$(date +%s.%N)
        runtime=$(echo "$end - $start" | bc)
        echo "${MODULE} $runtime seconds" >> log_time.txt
        rm Doxyfile${MODULE}Tag
    done

    # check doxygen error (bad doxyfile, missing sources)
    if [ "$CHECK_WARNINGS" = true ] && grep -q "^warning: " log_error.txt; then
        cat log_error.txt
        echo "ERROR: documentation generation error 2"
        return 1
    fi
}

generate_documentation() {
    echo "4.generate_documentation_tags"
    # generate tag files
    for MODULE in ${MODULES[*]}
    do
        cp Doxyfile${MODULE} Doxyfile${MODULE}Tag
        echo "" >> Doxyfile${MODULE}Tag
        echo "GENERATE_TAGFILE = MeshLib/MeshLib${MODULE}.tag" >> Doxyfile${MODULE}Tag
        echo "========== ${MODULE}" >> log_tag.txt
        echo "========== ${MODULE}" >> log_tag_error.txt
        start=$(date +%s.%N)
        doxygen -d time ./Doxyfile${MODULE}Tag 1>> log_tag.txt 2>> log_tag_error.txt
        end=$(date +%s.%N)
        runtime=$(echo "$end - $start" | bc)
        echo "${MODULE} tag $runtime seconds" >> log_time.txt
        rm Doxyfile${MODULE}Tag
        
    done
    rm -rf ${TARGET_DIR}/html/*

    # check doxygen error (bad doxyfile, missing sources) 
    if [ "$CHECK_WARNINGS" = true ] && grep -q "^warning: " log_tag_error.txt; then
        cat log_tag_error.txt
        echo "ERROR: documentation generation error 1"
        return 1
    fi

    # final generation of documentation
    for MODULE in ${MODULES[*]}
    do
        cp Doxyfile${MODULE} Doxyfile${MODULE}Tag
        DIR=".."
        if [ "$MODULE" = "Main" ]; then
            DIR="."
        fi
        for MODULE_2 in ${MODULES[*]}
        do
            if [ "$MODULE" = "$MODULE_2" ]; then
                continue
            elif [ "$MODULE_2" = "Main" ]; then
                echo "" >> Doxyfile${MODULE}Tag
                echo "TAGFILES += MeshLib/MeshLib${MODULE_2}.tag=../" >> Doxyfile${MODULE}Tag
            else
                echo "" >> Doxyfile${MODULE}Tag
                echo "TAGFILES += MeshLib/MeshLib${MODULE_2}.tag=${DIR}/${MODULE_2}/" >> Doxyfile${MODULE}Tag
            fi
        done
        if [ "$MODULE" = "Cpp" ]; then
            echo "GENERATE_XML = YES" >> Doxyfile${MODULE}Tag
            echo "XML_OUTPUT = ./xml" >> Doxyfile${MODULE}Tag
        fi
        echo "========== ${MODULE}" >> log.txt
        echo "========== ${MODULE}" >> log_error.txt
        start=$(date +%s.%N)
        doxygen -d time ./Doxyfile${MODULE}Tag 1>> log.txt 2>> log_error.txt
        end=$(date +%s.%N)
        runtime=$(echo "$end - $start" | bc)
        echo "${MODULE} $runtime seconds" >> log_time.txt
        rm Doxyfile${MODULE}Tag
    done

    # check doxygen error (bad doxyfile, missing sources)
    if [ "$CHECK_WARNINGS" = true ] && grep -q "^warning: " log_error.txt; then
        cat log_error.txt
        echo "ERROR: documentation generation error 2"
        return 1
    fi
}

remove_and_restore_files() {
    echo "5.remove_and_restore_files"
    # remove tag files
    for MODULE in ${MODULES[*]}
    do
        [[ -f MeshLib/MeshLib${MODULE}.tag ]] && rm -f MeshLib/MeshLib${MODULE}.tag
    done
    ./scripts/restore_files.sh
}

post_processing() {
    echo "6.post_processing"
    ./scripts/update_search.sh "$TARGET_DIR"
    ./scripts/post.sh "$TARGET_DIR"
}

show_statistics() {
    for MODULE in ${MODULES[*]}
    do
        if [ "$MODULE" != "Main" ]; then
            echo "Module ${MODULE}"
            python3 ./scripts/doxystat/metrics.py ${TARGET_DIR}/xml_${MODULE}
        fi
    done
    cat log_time.txt
}

check_links() {
    python3 ./scripts/check_links.py $TARGET_DIR
}

prepare_source_files
prepare_setting_files
if [[ $? -ne 0 ]]; then
    exit $?
fi
prepare_output_directory
clear_log_files
generate_documentation_simple
exit_code=$?
remove_and_restore_files
if [[ $exit_code -ne 0 ]]; then
    exit $exit_code
fi
post_processing
check_links
#show_statistics

