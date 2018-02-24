module.exports = (bot, member) => {
  const { RichEmbed } = require('discord.js');
  bot.channels.find('name', 'welcome').send(`Welcome to the server **${member.user.tag}**! Make sure to read the rules! We now have ${member.guild.memberCount} members.`);
  bot.channels.find('name', 'logs').send(
    new RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:arrow_right: ${member.user.tag}`)
      .setDescription(`*${member.user.tag}* joined this server.`)
      .addField('ID', member.id, true)
      .addField('Created Account', member.user.createdAt, true)
      .setTimestamp()
      .setFooter(member.user.tag, member.user.avatarURL)
  );
  const role = member.guild.roles.find('name', 'Trainers');
  member.addRole(role);
};
