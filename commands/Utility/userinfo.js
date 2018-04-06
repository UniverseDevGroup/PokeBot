/** **************************************
 *
 *   UserInfo: Plugin for PokeBot that gives the user information about themselves or another user.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg) => {
  const { RichEmbed } = require('discord.js');
  let user;
  if (!msg.mentions.members.first()) {
    user = msg.member;
  } else {
    user = msg.mentions.members.first();
  }
  msg.channel.send(
    new RichEmbed()
      .setColor(0x00ae86)
      .setTitle('User Information')
      .addField('User ID', user.id)
      .addField('Account Creation Date', user.user.createdAt)
      .addField('Join Guild Date', user.joinedAt)
      .addField('Names', 'Display Name: ' + user.displayName + `\nUsername: ${user.user.tag}`)
      .setFooter('PokeBot v1.0')
  );
};

exports.conf = {
  aliases: ['uinfo', 'userinformation'],
  guildOnly: true,
};

exports.help = {
  name: 'userinfo',
  description: 'Shows information about the mentioned user',
  usage: '@user',
};
