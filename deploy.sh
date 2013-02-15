#!/bin/sh

rsync -glpPrtvzC --exclude=".gitignore" --exclude="deploy.sh" --exclude="README.md" --delete . filipegi@listavip.filipegiusti.com:~/public_html/sites/listavip.filipegiusti.com

