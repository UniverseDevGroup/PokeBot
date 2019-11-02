/** **************************************
 *
 *   Ship: Plugin for PokeBot that ships the user with someone else.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg) => {
  msg.channel.send(`${msg.author.username} x ${msg.guild.members.random().displayName} :cruise_ship:`);
};

exports.conf = {
  aliases: [],
  guildOnly: true
};

exports.help = {
  name: 'ship',
  description: 'Test the luck of your love life! Ships you with another user.'
};
