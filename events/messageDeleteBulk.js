module.exports = (bot, msgs) => {
  const { RichEmbed } = require('discord.js');
  try {
    const embed = new RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:wastebasket: ${msgs.size}`)
      .setDescription(`${msgs.size} messages in *${msgs.first().channel}* were bulk deleted.`)
      .setTimestamp()
      .setFooter('Messages purged');
    msgs.first().guild.channels.find('name', 'logs').send({ embed });
  }
  catch (err) {
    console.error(err.stack);
  }
};
