/** **************************************
 *
 *   Jail: Plugin for PokeBot that punishes bad boys..
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg) => {
  if (msg.guild.id != '417088992329334792') {
    return msg.reply('This is a PokeWorld exclusive command. Sorry!');
  }

  if (!msg.guild.member(bot.user).hasPermission('MANAGE_ROLES')) {
    return msg.reply('I cannot put anyone in jail.');
  }

  const member = msg.mentions.members.first();
  if (!member) {
    return msg.reply('Who do I put in jail? (Remember to @mention them)');
  }

  member.addRole(msg.guild.roles.find('name', 'Jail'));

  const {RichEmbed} = require('discord.js');
  try {
    const embed = new RichEmbed()
      .setColor(0x00ae86)
      .setAuthor(member.user.tag, member.user.avatarURL)
      .setTitle(`Jail: **${member.user.tag}**`)
      .setDescription(`*${member.user.tag}* was placed in jail by *${msg.author.tag}*.`)
      .addField('Moderator', msg.author.tag)
      .setTimestamp()
      .setFooter(`${msg.author.tag} put ${member.user.tag} in jail.`, msg.author.avatarURL);
    const logChannel = await bot.plugins.settings.getStr('logs', msg.guild.id);
    msg.guild.channels.find('id', logChannel).send({embed});
  } catch (err) {
    console.error(err.stack);
  }
};

exports.checkPermission = (bot, member) => {
  if (!member.hasPermission('BAN_MEMBERS')) {
    return 'You don\'t have permission to put members in jail.';
  }
  return true;
};

exports.conf = {
  aliases: [],
  guildOnly: true
};

exports.help = {
  name: 'jail',
  description: 'Jail a user.',
  usage: '@user'
};
