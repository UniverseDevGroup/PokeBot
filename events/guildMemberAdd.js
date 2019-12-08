/** **************************************
 *
 *   GuildMemberAdd: Plugin for PokeBot that setups up and welcomes any new user.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

module.exports = async (bot, member) => {
  const {RichEmbed} = require('discord.js');
  const logChannel = await bot.plugins.settings.getStr('logs', member.guild.id);
  if (!logChannel) {
    return;
  }
  const channelObj = bot.channels.find('id', logChannel);
  if (!channelObj) {
    return;
  }
  channelObj.send(
    new RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:arrow_right: ${member.user.tag}`)
      .setDescription(`*${member.user.tag}* joined this server.`)
      .addField('ID', member.id, true)
      .addField('Created Account', member.user.createdAt, true)
      .setTimestamp()
      .setFooter(member.user.tag, member.user.avatarURL)
  );

  if (member.guild.id != '417088992329334792') {
    return;
  }

  const botCount = member.guild.members.filter(x => x.user.bot).size;
  bot.channels.get('635835776613220353').setName(`User Count: ${member.guild.memberCount}`);
  bot.channels.get('635835832913231872').setName(`Member Count: ${member.guild.memberCount - botCount}`);
  bot.channels.get('635835875065987073').setName(`Bot Count: ${botCount}`);
  bot.channels.get('417100669980508160').send(`Welcome to the server **${member.user.tag}**! Make sure to read the rules! We now have ${member.guild.memberCount} members.`);
  bot.channels.get('417088992329334794').send(`Welcome to the server <@${member.id }>. Be sure to join a team: \`p:jointeam <flare, skull>\`. Also, make sure to read our introduction: \`p:start\`.`);
  const role = member.guild.roles.find('name', 'Trainers');
  member.addRole(role);
};
