/** **************************************
 *
 *   Ready: Plugin for PokeBot that setups up pokebot for production.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

module.exports = (bot) => {
  console.log('PokeBot has finished loading.');
  bot.setInterval(function() {
    const games = [
      'Pokemon',
      'Catching things',
      'Finding pokemon',
      'Type p:help for help',
      'Fighting AstralMod',
      'Arrays start at 1'
    ];

    bot.user.setPresence({
      status: 'online',
      afk: false,
      game: {
        type: 0,
        name: games[Math.floor(Math.random() * games.length)]
      }
    });
  }, 200000);
};
