/** **************************************
 *
 *   Ship: Plugin for PokeBot that ships the user with someone else.
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

exports.run = (bot, msg) => {
  msg.channel.send(msg.author.username + ' x ' + msg.guild.members.random().displayName + ' :cruise_ship:');
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'ship',
  description: 'Test the luck of your love life! Ships you with another user.',
};
