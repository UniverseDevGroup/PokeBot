/** **************************************
 *
 *   GuildMemberRemove: Plugin for PokeBot that waves bye to a user who leaves.
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
      .setTitle(`:arrow_left: ${member.user.tag}`)
      .setDescription(`*${member.user.tag}* left this server.`)
      .addField('ID', member.id, true)
      .addField('Created Account', member.user.createdAt, true)
      .addField('Joined At', member.joinedAt, true)
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
  bot.channels.get('417100669980508160').send(`**${member.user.tag}** just left. We now have ${member.guild.memberCount} members left. Aww man...`);
};
