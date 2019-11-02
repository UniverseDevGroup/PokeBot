#!/bin/bash
echo 'Welcome to the PokeBot Console.'
echo 'Press the enter key to start PokeBot.'
read a
for (( ; ; ))
do
    git pull
    npm start
    echo 'Starting back up in 2 seconds...'
    sleep 2
done