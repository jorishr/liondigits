#!/bin/sh
USERNAME=${1?ERROR: add username as parameter}
scp -r dist/* $USERNAME@$MYVPS:/var/www/liondigits.com/public