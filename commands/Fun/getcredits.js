/** **************************************
 *
 *   Get Credits: Plugin for PokeBot that gives you credits.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/
const cooldown = new Set();

exports.run = (bot, msg) => {
  if (cooldown.has(msg.author.id)) return msg.reply('You have claimed credits too recently');

  if (bot.dbl.hasVoted(msg.author.id)) {
    bot.plugins.economy.add(msg.author.id, 100);
    msg.reply('Since you upvoted the bot, here is 100 credits.');
  }
  else {
    bot.plugins.economy.add(msg.author.id, 25);
    msg.reply('Added 25 credits.');
  }
  cooldown.add(msg.author.id);
  setTimeout(() => {
    cooldown.delete(msg.author.id);
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
