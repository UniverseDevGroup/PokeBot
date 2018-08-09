/** **************************************
 *
 *   Balance: Plugin for Galaxy that monitors economy features.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg) => {
  const credits = await bot.plugins.economy.get(msg.author.id);
  msg.reply(credits + ' atoms');
};

exports.conf = {
  aliases: ['bal', 'money', 'coins'],
  guildOnly: true,
};

exports.help = {
  name: 'balance',
  description: 'Check your balance!',
};
