/** **************************************
 *
 *   GuildMemberAdd: Plugin for PokeBot that setups up and welcomes any new user.
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

  const DMMember = "Hello, Alee is still working on this feature...";
  const { RichEmbed } = require('discord.js');
  member.user.send(
    new RichEmbed()
    .setColor(0x00ae86)
    .setTitle(`Pokebot`)
    .setDescription(DMMember)
  );
};
