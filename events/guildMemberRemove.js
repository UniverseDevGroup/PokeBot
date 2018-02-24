module.exports = (bot, member) => {
  const { RichEmbed } = require('discord.js');
  bot.channels.get('416633835216830495').send(`**${member.user.tag}** just left. We now have ${member.guild.memberCount} members left. Aww man...`);
  bot.channels.find('name', 'logs').send(
    new RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:arrow_left: ${member.user.tag}`)
      .setDescription(`*${member.user.tag}* left this server.`)
      .addField('ID', member.id, true)
      .addField('Created Account', member.user.createdAt, true)
      .addField('Joined At', member.joinedAt, true)
      .setTimestamp()
      .setFooter(member.user.tag, member.user.avatarURL)
  );
};
