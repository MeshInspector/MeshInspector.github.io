1. To create an original and a patched version search.js execute the create_search_js.sh script

2. To create/update a patch file after some changes in search.js, run next command (from this directory)
```
diff -u search.js.orig search.js > search.patch
```