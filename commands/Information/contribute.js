/****************************************
 *
 *   Contribute: Plugin for PokeBot that redirects users to the proper place to contribute.
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
  msg.channel.send('Want to help the bot? Here you go: https://github.com/PokeWorld/PokeBot.');
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'contribute',
  description: 'Contributing to the bot.',
};
