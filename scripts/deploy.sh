#!/bin/sh
# Build game và đăng lên nhánh gh-pages (GitHub Pages)
set -e
cd "$(dirname "$0")/.."
npm run build
touch dist/.nojekyll
REMOTE=$(git remote get-url origin)
cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy $(date '+%Y-%m-%d %H:%M')"
git push -q -f "$REMOTE" gh-pages
rm -rf .git
echo "Đã đăng lên GitHub Pages."
