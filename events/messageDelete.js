/** **************************************
 *
 *   MessageDelete: Plugin for PokeBot that handles deleted messages.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

module.exports = async (bot, msg) => {
  const { RichEmbed } = require('discord.js');
  if (!msg.content) return;
  try {
    const embed = new RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:wastebasket: **${msg.author.tag}**`)
      .setDescription(`A message created by *${msg.author.tag}* was deleted in *${msg.channel}*.`)
      .addField('Deleted Message', msg.content)
      .setTimestamp()
      .setFooter(`Deleted message orginally created by: ${msg.author.tag}`, msg.author.avatarURL);
    const logChannel = await bot.plugins.settings.getStr('logs', msg.guild.id);
    if (!logChannel) return;
    const channelObj = bot.channels.find('id', logChannel);
    if (!channelObj) return;
    channelObj.send({ embed });
  }
  catch (err) {
    console.error(err.stack);
  }
};
