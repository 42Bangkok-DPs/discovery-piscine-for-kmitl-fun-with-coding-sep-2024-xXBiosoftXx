#!/bin/bash
find . -type f -o -type d | wc -l | xargs echo -n && echo '$'
