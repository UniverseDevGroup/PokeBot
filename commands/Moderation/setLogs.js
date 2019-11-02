/** **************************************
 *
 *   Set Log: Plugin for PokeBot that performs moderation actions.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg, args) => {
  bot.plugins.settings.setStr('logs', args[0], msg.guild.id);
  msg.reply(`Alright, I have set the log channel to ${args[0]}`);
};

exports.checkPermission = (bot, member) => {
  if (!member.hasPermission('MANAGE_MESSAGES')) {
    return 'You don\'t have permission to manage messages.';
  }
  return true;
};


exports.conf = {
  aliases: [],
  guildOnly: true
};

exports.help = {
  name: 'setLogs',
  description: 'Set\'s the Log Channel.',
  usage: '<channelID>'
};
