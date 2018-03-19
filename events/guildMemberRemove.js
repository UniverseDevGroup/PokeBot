/** **************************************
 *
 *   GuildMemberRemove: Plugin for PokeBot that waves bye to a user who leaves.
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

module.exports = async (bot, member) => {
  const { RichEmbed } = require('discord.js');
  const logChannel = await bot.plugins.settings.getStr('logs', member.guild.id);
  bot.channels.find('id', logChannel).send(
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
  if (member.guild.id != '417088992329334792') return;
  bot.channels.get('417100669980508160').send(`**${member.user.tag}** just left. We now have ${member.guild.memberCount} members left. Aww man...`);
};
