#!/bin/bash

if [ "$#" - eq 0 ]; then
  echo "No arguments supplied"
  exit
fi

if [ "$#" -lt 1 ]; then
  exit 1
fi

count=0
for arg in "$@"; do
  echo "$arg"
  count=$((count + 1))
  if [ "$count" -eq 3 ]; then
    break
  fi
done
