/** **************************************
 *
 *   List Warns: Plugin for PokeBot that performs moderation actions.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg) => {
  const db = require('quick.db');
  const { RichEmbed } = require('discord.js');

  const warns = await db.fetch(`warns_${msg.guild.id}_${msg.author.id}`);
  if (!warns) return await msg.reply('You don\'t have any warnings in this server.');
  const embed = new RichEmbed()
    .setTitle('Warns');
  for (let i = 0; i < warns.count; i++) {
    embed.addField('Warning #' + i + 1, warns.reasons[i]);
  }
  msg.channel.send({ embed });
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'lswarns',
  description: 'Shows all the warnings a user has.',
};
