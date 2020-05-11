#!/bin/sh
export NODE_ENV="production"
npm run build
cp -r ~/Projects/amitos80.github.io/public/. ~/Projects/amitos80.github.io-master
cp -r ~/Projects/amitos80.github.io/.cache/. ~/Projects/amitos80.github.io-master/.cache/
cd ~/Projects/amitos80.github.io-master
git add .
git commit -m "version"
git push
unset NODE_ENV
cd ~/Projects/amitos80.github.io
