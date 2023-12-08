#!/bin/sh

set -e

## Backup
DIR_PATH_BASE="/var/www/liondigits.com"
BACKUP_FOLDER="$DIR_PATH_BASE/backup/backup_$(date +%Y-%m-%d_%H-%M)"
mkdir -p "$BACKUP_FOLDER"
cp -r "$DIR_PATH_BASE/public/*" "$BACKUP_FOLDER"

## Clone repo
GITHUB_REPO_URL="https://github.com/jorishr/liondigits.git"  
NEW_RELEASE_FOLDER="$DIR_PATH_BASE/new_release"

git clone "$GITHUB_REPO_URL" "$NEW_RELEASE_FOLDER" 

RECOMMENDED_NODE_VERSION=$(jq -r '.engines.node' package.json)

[ -s "$HOME/.nvm/nvm.sh" ] && . "$HOME/.nvm/nvm.sh"

nvm use "$RECOMMENDED_NODE_VERSION" || nvm use 18

cd "$NEW_RELEASE_FOLDER"
npm install
npm run build

rm -rf "$DIR_PATH_BASE/public/*"

# File name hashing from build task make errror404 file name dynamic. Error404 filename in NGINX is static.
ERROR404_HTML=$(find "$NEW_RELEASE_FOLDER/dist" -type f -name "error404*.html" -print -quit)

if [ -n "$ERROR404_FILE" ]; then
    NEW_NAME="error404-latest.html" 
    mv "$ERROR404_FILE" "$NEW_NAME"
    echo "File renamed from $ERROR404_FILE to $NEW_NAME."
else
    echo "Error: File not found."
fi

## copy the robots.txt and sitemap.xml files; not part of the build process
for file in "$NEW_RELEASE_FOLDER/app/{sitemap.xml,robots.txt}"; do
    if [ -f "$file" ]; then
        cp "$file" "$DIR_PATH_BASE/public"
        echo "Copied $file to $DIR_PATH_BASE/public."
    else
        echo "Error: $file not found."
    fi
done

## copy the files from build folder to final destination
cp "$NEW_RELEASE_FOLDER/dist/*" "$DIR_PATH_BASE/public"

## clean up
rm -rf "$NEW_RELEASE_FOLDER"