/** **************************************
 *
 *   MessageUpdate: Plugin for PokeBot that handles edited messages.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

module.exports = async (bot, oldMsg, newMsg) => {
  const { RichEmbed } = require('discord.js');
  if (oldMsg.content == newMsg.content) return;
  try {
    const embed = new RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:pencil2: **${oldMsg.author.tag}**`)
      .setDescription(`A message created by *${oldMsg.author.tag}* was edited in *${oldMsg.channel}*.`)
      .addField('Old Message', oldMsg.content)
      .addField('New Message', newMsg.content)
      .setTimestamp()
      .setFooter(`Edited message originally created by: ${oldMsg.author.tag}`, oldMsg.author.avatarURL);
    const logChannel = await bot.plugins.settings.getStr('logs', oldMsg.guild.id);
    newMsg.guild.channels.find('id', logChannel).send({ embed });
  }
  catch (err) {
    console.error(err.stack);
  }
};
