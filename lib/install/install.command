#!/bin/bash
# baffects.js installer
# as suggested by fabiantheblind in basil.js installation
# adaptation to baffects naming files

# Installation
# 1. Open a terminal
# 2. Type sh and drag and drop this file into terminal

BASEDIR="$( dirname "$0" )"
cd "$BASEDIR"
echo "This is where we are :"
pwd

echo "Installing baffects.js... "
mkdir -p ~/Documents/baffects/
cp -r ../ ~/Documents/baffects/lib
mkdir -p ~/Documents/baffects/sketches

echo "Installation is done!"