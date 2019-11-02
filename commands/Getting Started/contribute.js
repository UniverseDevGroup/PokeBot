/** **************************************
 *
 *   Contribute: Plugin for PokeBot that redirects users to the proper place to contribute.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg) => {
  msg.channel.send('Want to help the bot? Here you go: https://github.com/UniverseDevGroup/PokeBot.');
};

exports.conf = {
  aliases: [],
  guildOnly: true
};

exports.help = {
  name: 'contribute',
  description: 'Contributing to the bot.'
};
