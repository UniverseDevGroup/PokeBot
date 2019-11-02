/** **************************************
 *
 *   Interrogate: Plugin for PokeBot that allows the staff to investigate the fish :cod:
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
    return msg.reply('I cannot interrogate anyone.');
  }

  const member = msg.mentions.members.first();
  if (!member) {
    return msg.reply('Who shall I interrogate? (Remember to @mention them)');
  }

  member.addRole(msg.guild.roles.find('name', 'Interrogation'));

  const {RichEmbed} = require('discord.js');
  try {
    const embed = new RichEmbed()
      .setColor(0x00ae86)
      .setAuthor(member.user.tag, member.user.avatarURL)
      .setTitle(`Interrogation: **${member.user.tag}**`)
      .setDescription(`*${member.user.tag}* was interrogated by *${msg.author.tag}*.`)
      .addField('Moderator', msg.author.tag)
      .setTimestamp()
      .setFooter(`${msg.author.tag} interrogated ${member.user.tag}.`, msg.author.avatarURL);
    const logChannel = await bot.plugins.settings.getStr('logs', msg.guild.id);
    msg.guild.channels.find('id', logChannel).send({embed});
  } catch (err) {
    console.error(err.stack);
  }
};

exports.checkPermission = (bot, member) => {
  if (!member.hasPermission('BAN_MEMBERS')) {
    return 'You don\'t have permission to interrogate others. Rip-off detectives...';
  }
  return true;
};

exports.conf = {
  aliases: [],
  guildOnly: true
};

exports.help = {
  name: 'interrogate',
  description: 'Interrogate a suspect/user.',
  usage: '@user'
};
