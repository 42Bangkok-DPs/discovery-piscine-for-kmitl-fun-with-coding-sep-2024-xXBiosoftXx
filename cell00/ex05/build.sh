#!/bin/bash

if [ "$#" -eq 0 ]; then
  echo "No arguments supplied"
fi

if [ "$#" -lt 1 ]; then
  exit 1
fi

for arg in "$@"; do
  mkdir "ex$arg"
done
