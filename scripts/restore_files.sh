#!/bin/bash

# restore html_header.html
[[ -f html_header.html.bak ]] && mv html_header.html.bak html_header.html

# remove html_header_main.html
[[ -f html_header_main.html ]] && rm html_header_main.html

# Restore DoxyfileBase
[[ -f DoxyfileBase.bak ]] && mv DoxyfileBase.bak DoxyfileBase
