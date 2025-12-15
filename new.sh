#!/usr/bin/env bash

DIR=$(realpath ${0%/*})
cd $DIR

if [ -z "$1" ]; then
  echo "$0 <PROJECT>"
  exit 1
fi

if [ -d "$1" ]; then
  echo "$1 EXIST"
  exit 1
fi

set -ex

cp -R _tmpl $1

cd $1

fd --type file --hidden --exclude .git -x sd "_tmpl" "$1" $@ "{}"

git add .
