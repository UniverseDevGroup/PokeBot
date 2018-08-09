/** **************************************
 *
 *   Ping: Plugin for Galaxy that provides diagnostic information.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg) => {
  const { RichEmbed } = require('discord.js');
  const embed = new RichEmbed();
  embed
    .setColor (0x00ae86)
    .setTitle(':computer: Bot Statistics')
    .setDescription('Showing bot statistics:')
    .setFooter('Galaxy 2.0 Alpha 1');

  embed.addField('Client Heartbeat', Math.floor(bot.ping) + ' ms.');
  
  msg.channel.send({ embed })
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'ping',
  description: 'Pings the bot and replies with the latency.',
};
