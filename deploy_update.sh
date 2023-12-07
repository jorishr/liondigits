#!/bin/sh
USERNAME=${1?ERROR: add username as first parameter}
SERVER=${2?ERROR: add server ip as second parameter}
DIR_PATH=${3?ERROR: add directory path on server as parameter}

echo "Deploying to $USERNAME@$SERVER:$DIR_PATH"
# create a backup of the current version
# remove the current version
# remove the backup after 24 hours
ssh $USERNAME@$SERVER << EOF
cd $DIR_PATH
mkdir ../backup_$(date +%Y-%m-%d_%H-%M)
cp -r $DIR_PATH/* ../backup_$(date +%Y-%m-%d_%H-%M)
rm -r $DIR_PATH/*
echo "0 0 * * * rm -r ../backup_$(date +%Y-%m-%d_%H-%M)" | at now + 1 day
exit
EOF
#upload new version
scp -r dist/* $USERNAME@$SERVER:$DIR_PATH