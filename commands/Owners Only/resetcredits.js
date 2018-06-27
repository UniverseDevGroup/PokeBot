/** **************************************
 *
 *   Reset Credits: Plugin for PokeBot that modifies economy features.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg) => {
  if (!['242775871059001344', '247221105515823104', '236279900728721409', '269516487566426112'].includes(msg.author.id)) return msg.reply('Nope! You need the person who created this bot to use this command.');

  let user;
  if (!msg.mentions.users.first()) {
    user = msg.author;
  } else {
    user = msg.mentions.users.first();
  }

  const oldbal = bot.plugins.economy.get(user.id);

  bot.plugins.economy.subtract(user.id, oldbal);

  msg.channel.send(`Reset ${user.tag}'s credits.`);
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'resetcredits',
  description: 'Modifies the credits of a user',
  usage: '@user <credits>',
};
