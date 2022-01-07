npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/Brunao77/Higher-or-Lower-Youtube.git master:gh-pages
