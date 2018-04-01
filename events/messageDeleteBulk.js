/** **************************************
 *
 *   MessagesDeleteBulk: Plugin for PokeBot that handles many messages being deleted at once.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

module.exports = async (bot, msgs) => {
  const { RichEmbed } = require('discord.js');
  try {
    const embed = new RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:wastebasket: ${msgs.size}`)
      .setDescription(`${msgs.size} messages in *${msgs.first().channel}* were bulk deleted.`)
      .setTimestamp()
      .setFooter('Messages purged');
    const logChannel = await bot.plugins.settings.getStr('logs', msgs.first().guild.id);
    msgs.first().guild.channels.find('id', logChannel).send({ embed });
  }
  catch (err) {
    console.error(err.stack);
  }
};
