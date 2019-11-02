/** **************************************
 *
 *   Nick: Plugin for PokeBot that changes the user's display name.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg, args) => {
  const {RichEmbed} = require('discord.js');

  msg.member.setNickname(args.join(' '), 'Requested by bot');
  msg.channel.send(`Changed nickname to: ${args.join(' ')}`);
  const logChannel = await bot.plugins.settings.getStr('logs', msg.member.guild.id);
  if (!logChannel) {
    return;
  }
  const channelObj = bot.channels.find('id', logChannel);
  if (!channelObj) {
    return;
  }
  channelObj.send(
    new RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`Nickname: ${msg.author.tag}`)
      .setDescription(`*${msg.author.tag}* changed their nickname`)
      .addField('New Nickname', msg.member.displayName, true)
      .setTimestamp()
      .setFooter('PokeBot v1.0')
  );
};

exports.conf = {
  aliases: ['nickname'],
  guildOnly: true
};

exports.help = {
  name: 'nick',
  description: 'Change your nickname.',
  usage: '<...new nick>'
};
