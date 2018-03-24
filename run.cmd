@echo off

title PokeBot Console

echo ------------------------------
echo |Welcome to PokeBot Console! |
echo |If you ran this without     |
echo |changing the token, you have|
echo |made an error. You are      |
echo |supposed to navigate to the |
echo |config.json file, and change|
echo |the token to your bot user's|
echo |token. After that, you have |
echo |managed to successfully self|
echo |host PokeBot!               |
echo ------------------------------
:a
git pull
node bot.js
goto a
