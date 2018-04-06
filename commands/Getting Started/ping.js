/** **************************************
 *
 *   Ping: Plugin for PokeBot that provides diagnostic information.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg) => {
  msg.channel.send(':ping_pong: Pong! ' + Math.floor(bot.ping) + 'ms.');
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'ping',
  description: 'Pings the bot and replies with the latency.',
};
