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
  if (!isWhitelist) return msg.reply ('This command is still in testing. Only whitelisted servers can use this command. Sorry!');

  if (msg.member.roles.find('name', 'Skull')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Skull'));
    msg.reply('Alright, you are not longer in team Skull.');
  }
  else if (msg.member.roles.find('name', 'Flare')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Flare'));
    msg.reply('Alright, you are not longer in team Flare.');
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
  name: 'leave',
  description: 'Leave the team you currently are in.',
};
