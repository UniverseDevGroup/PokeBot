/** **************************************
 *
 *   Leave: Plugin for PokeBot that powers the PokeWorld team system.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg) => {
  const isWhitelist = await bot.plugins.whitelist.isWhitelist(msg.guild.id);
  if (!isWhitelist) return msg.reply ('This is a Whiltelisted command. Only whitelisted servers can use this command. Sorry!');

  if (msg.member.roles.find('name', 'Skull')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Skull'));
    msg.reply('Alright, you are not longer in the alliance `Skull`.');
  }
  else if (msg.member.roles.find('name', 'Dark Side')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Dark Side'));
    msg.reply('Alright, you are not longer in the alliance `Dark Side`.');
  }
  else {
    msg.reply('You are not in a team.');
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'leavealliance',
  description: 'Leave the alliance you currently are in.',
};
