/** **************************************
 *
 *   Ping: Plugin for PokeBot that provides diagnostic information.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg) => {
  
  const embed = new RichEmbed();
  embed
    .setColor (0x00ae86)
    .setDescription('Showing bot statistics:')
    .setFooter('Pokebot 2.0 Alpha 1');

  embed.addField('Client Heartbeat', Math.floor(bot.ping) + 'ms.');
  
  msg.channel.send(embed)
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'ping',
  description: 'Pings the bot and replies with the latency.',
};
