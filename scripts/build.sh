#!/usr/bin/env bash

export DISABLE_ESLINT_PLUGIN=true
sudo apt-get update -y
sudo apt install -y gcc g++ make cmake pkg-config build-essential checkinstall
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install --global yarn
yarn install
yarn run build
