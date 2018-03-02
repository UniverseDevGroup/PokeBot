/** **************************************
 *
 *   Leave: Plugin for PokeBot that powers the PokeWorld team system.
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

  if (msg.member.roles.find('name', 'Aqua')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Aqua'));
    msg.reply('Alright, you are not longer in team Aqua.');
  }
  else if (msg.member.roles.find('name', 'Rocket')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Rocket'));
    msg.reply('Alright, you are not longer in team Rocket.');
  }
  else if (msg.member.roles.find('name', 'Magma')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Magma'));
    msg.reply('Alright, you are not longer in team Magma.');
  }
  else {
    msg.reply('You are not in a team.');
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'leave',
  description: 'Leave the team you currently are in.',
};
