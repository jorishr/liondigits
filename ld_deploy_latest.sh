#!/bin/sh
echo -e "\033[1;36m-----------------------------------"
echo -e "| Deploying the latest release... |"
echo -e "-----------------------------------\033[0m\n"

set -e

echo -e "=== Start backup existing files... ===\n"
DIR_PATH_BASE="<your_folder>"
BACKUP_FOLDER="$DIR_PATH_BASE/backup/backup_$(date +%Y-%m-%d_%H-%M)"
mkdir -p "$BACKUP_FOLDER"
if cp -r "$DIR_PATH_BASE/<folder>/" "$BACKUP_FOLDER"; then
    echo -e "\033[32m✓ Backup completed\033[0m\n"
else
    echo -e "\033[1;31m✗ Error: backup failed.\033[0m\n"
fi

echo -e "=== Start cloning github repo... ===\n"
GITHUB_REPO_URL="<github_repo_url>"
NEW_RELEASE_FOLDER="$DIR_PATH_BASE/new_release"

git clone "$GITHUB_REPO_URL" "$NEW_RELEASE_FOLDER"

echo -e "=== Starting npm install... ===\n"
cd "$NEW_RELEASE_FOLDER"

RECOMMENDED_NODE_VERSION=$(jq -r '.engines.node' package.json)

[ -s "$HOME/.nvm/nvm.sh" ] && . "$HOME/.nvm/nvm.sh"

nvm use "$RECOMMENDED_NODE_VERSION" || nvm use 18

npm install
npm run build

echo -e "=== Start removing existing webapp files... ===\n"
if rm -rf "$DIR_PATH_BASE/<folder>"/*; then
    echo -e "\033[32m✓ Existing files deleted\033[0m\n"
else
    echo -e "\033[1;31m✗ Error: Error while deleting existing files.\033[0m\n"
fi

# File name hashing from build task make errror404 file name dynamic. Error404 filename in NGINX is static.
echo -e "=== Start processing error404.html... ===\n"
ERROR404_FILE=$(find "$NEW_RELEASE_FOLDER/dist" -type f -name "error404*.html" -print -quit)

if [ -n "$ERROR404_FILE" ]; then
    NEW_NAME="error404-latest.html" 
    mv "$ERROR404_FILE" "$NEW_NAME"
    echo -e "\033[32m✓ File renamed from $ERROR404_FILE to $NEW_NAME.\033[0m\n"
else
    echo -e "\033[1;31m✗ Error: error404.html file not found.\033[0m\n"
fi

## copy the robots.txt and sitemap.xml files; not part of the build process
echo -e "=== Start processing sitemap.xml & robots.txt... ===\n"
for file in $NEW_RELEASE_FOLDER/app/{sitemap.xml,robots.txt}; do
    if [ -f "$file" ]; then
        cp "$file" "$DIR_PATH_BASE/<folder>"
        echo -e "\033[32m✓ Copied $file to $DIR_PATH_BASE/<folder>.\033[0m\n"
    else
        echo -e "\033[1;31m✗ Error: $file not found.\033[0m\n"
    fi
done

echo -e "=== Start copying build files to final destination... ===\n"
if cp $NEW_RELEASE_FOLDER/dist/* "$DIR_PATH_BASE/<folder>"; then
    echo -e "\033[32m✓ Files copied to final destination folder\033[0m\n"
else
    echo -e "\033[1;31m✗ Error: Error while copying files to final destination folder.\033[0m\n"
fi

echo -e "=== Starting clean up... ===\n"
if rm -rf $NEW_RELEASE_FOLDER; then
    echo -e "\033[32m✓ Temporary folder cleaned up.\033[0m\n"
else
    echo -e "\033[1;31m✗ Error: Error while cleaning up temporary folder.\033[0m\n"
fi

nvm use default
echo -e "\033[1;32m---------------------------------------"
echo -e "| ✓ New release deployed succesfully! |"
echo -e "---------------------------------------\033[0m\n"