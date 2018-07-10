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
  bot.user.setPresence({
    status: 'online',
    afk: false,
    game: {
      type: 0,
      name: 'v2.0 Alpha 1 - g:',
    },
  });
};
