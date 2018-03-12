/** **************************************
 *
 *   Time Out: Plugin for PokeBot that punishes bad boys..
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

  if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('You don\'t have permission to put members in time-out..');
  if (!msg.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return msg.reply('I cannot put anyone in time-out.');

  const member = msg.mentions.members.first();
  if (!member) return await msg.reply('Who do I put in time-out?');

  msg.member.addRole(msg.guild.roles.find('name', 'Timeout'));

  const { RichEmbed } = require('discord.js');
  try {
    const embed = new RichEmbed()
      .setColor(0x00ae86)
      .setAuthor(member.user.tag, member.user.avatarURL)
      .setTitle(`Time Out: **${member.user.tag}**`)
      .setDescription(`*${member.user.tag}* was placed in time-out by *${msg.author.tag}*.`)
      .addField('Moderator', msg.author.tag)
      .setTimestamp()
      .setFooter(`${msg.author.tag} put ${member.user.tag} in time-out.`, msg.author.avatarURL);
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
  name: 'timeout',
  description: 'Put a user in time-out',
  usage: '@user',
};
