/** **************************************
 *
 *   Set Suggestions: Plugin for PokeBot that performs moderation actions.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg, args) => {
  if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You don\'t have permission to manage messages.');
  bot.plugins.settings.setStr('suggestions', args[0], msg.guild.id);
  msg.reply('Alright, I have set the suggestions channel to ' + args[0]);
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'setSuggestions',
  description: 'Set\'s the Suggestions Channel.',
  usage: '<channelID>',
};
