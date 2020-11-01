/** **************************************
 *
 *   Uptime: Plugin for PokeBot that provides diagnostic information.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg, args) => {
  let uptime = parseInt(bot.uptime);
  uptime = Math.floor(uptime / 1000);
  let uptimeMinutes = Math.floor(uptime / 60);
  const minutes = uptime % 60;
  let hours = 0;
  while (uptimeMinutes >= 60) {
    hours++;
    uptimeMinutes -= 60;
  }
  const uptimeSeconds = minutes % 60;
  switch(args[0]) {
    case 'ms':
      msg.channel.send(`${bot.uptime } ms.`);
      break;
    case 's':
      msg.channel.send(`${uptimeSeconds } seconds.`);
      break;
    case 'min':
      msg.channel.send(`${Math.floor(uptime / 60) } minutes ${ uptimeSeconds } seconds.`);
      break;
    default:
      msg.channel.send(`:clock3: Pokebot has been up for ${ hours } hours, ${ uptimeMinutes } minutes, and ${ uptimeSeconds } seconds.`);
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true
};

exports.help = {
  name: 'uptime',
  description: 'Get the uptime of the bot.'
};
