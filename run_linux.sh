#!/bin/bash
for (( ; ; ))
do
    git pull
    node bot_discord.js
done