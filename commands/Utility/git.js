/** **************************************
 *
 *   Git: Plugin for PokeBot that provides gives the user information about the bot.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg) => {
  msg.channel.send('The GitHub page for PokeBot can be found here: https://github.com/PokeWorld/PokeBot');
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'git',
  description: 'Gives the user a link to the git.',
};
