/** **************************************
 *
 *   Get Credits: Plugin for PokeBot that gives you credits.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/
const commandCooldown = new Set();

exports.run = (bot, msg) => {
  if (commandCooldown.has(msg.author.id)) return msg.reply('You have claimed credits too recently');

  if (bot.dbl.hasVoted(msg.author.id)) {
    bot.plugins.economy.add(msg.author.id, 100);
    return msg.reply('Since you upvoted the bot, here is 100 credits.');
  }
  bot.plugins.economy.add(msg.author.id, 25);
  msg.reply('Added 25 credits.');

  commandCooldown.add(msg.author.id);
  setTimeout(() => {
    commandCooldown.delete(msg.author.id);
  }, 3600000);
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'getcredits',
  description: 'Add credits to your account.',
};
