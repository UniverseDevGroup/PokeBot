module.exports = (bot, msg) => {
  const { RichEmbed } = require('discord.js');
  if(!msg.content) return;
  try {
    const embed = new RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:wastebasket: **${msg.author.tag}**`)
      .setDescription(`A message created by *${msg.author.tag}* was deleted in *${msg.channel}*.`)
      .addField('Deleted Message', msg.content)
      .setTimestamp()
      .setFooter(`Deleted message orginally created by: ${msg.author.tag}`, msg.author.avatarURL);
    msg.guild.channels.find('name', 'logs').send({ embed });
  }
  catch (err) {
    console.error(err.stack);
  }
};
