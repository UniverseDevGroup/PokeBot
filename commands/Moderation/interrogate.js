/** **************************************
 *
 *   Interrogate: Plugin for PokeBot that allows the staff to investigate the fish :cod:
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * *************************************/

exports.run = async (bot, msg) => {
  if (msg.guild.id != '417088992329334792') return msg.reply ('This is a PokeWorld exclusive command. Sorry!');

  if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('You don\'t have permission to interrogate others. Rip-off detectives...');
  if (!msg.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return msg.reply('I cannot interrogate anyone.');

  const member = msg.mentions.members.first();
  if (!member) return await msg.reply('Who do I interrogate?');

  member.addRole(msg.guild.roles.find('name', 'Interrogation'));

  const { RichEmbed } = require('discord.js');
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
    msg.guild.channels.find('id', logChannel).send({ embed });
  }
  catch (err) {
    console.error(err.stack);
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'interrogate',
  description: 'Interrogate a suspect/user.',
  usage: '@user',
};
