/** **************************************
 *
 *   ServerId: Plugin for PokeBot that gives the user the id of the server
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg) => {
  const {RichEmbed} = require('discord.js');
  msg.channel.send(msg.guild.id);
};

exports.conf = {
  guildOnly: true
};

exports.help = {
  name: 'serverid',
  description: 'Shows the server id',
  usage: ''
};
