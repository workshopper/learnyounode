#!/bin/sh

npm run html
git add guide
git commit -m 'update guide'

git checkout gh-pages &&
git merge -s subtree master && 
git push origin gh-pages && 
git checkout master