#!/usr/bin/env bash

env | awk -F: '/REACT_APP_*/ {print}' > ../.env
