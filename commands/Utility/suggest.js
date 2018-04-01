/** **************************************
 *
 *   Suggest: Plugin for PokeBot that allows users to suggest things.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg, args) => {
  const { RichEmbed } = require('discord.js');
  const suggestionChannel = await bot.plugins.settings.getStr('suggestions', msg.member.guild.id);
  bot.channels.find('id', suggestionChannel).send(
    new RichEmbed()
      .setColor (0x00ae86)
      .setTitle('Suggestion')
      .setDescription('This is a suggestion from a community member for something relating to the server. Please rate it based on your opinion, and a staff member will decide what to do with the suggestion.')
      .addField('Suggestion Contents', args.join(' '))
  ).then(message => {
    message.react('\u2705');
    message.react('\u274E');
  });
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'suggest',
  description: 'Suggest a feature for the bot or the server.',
  usage: '<...suggestion>',
};
