/****************************************
 *
 *   Uptime: Plugin for PokeBot that provides diagnostic information.
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

exports.run = (bot, msg, args) => {
  let uptime = parseInt(bot.uptime);
  uptime = Math.floor(uptime / 1000);
  let uptimeMinutes = Math.floor(uptime / 60);
  const minutes = uptime % 60;
  let hours = 0;
  while (uptimeMinutes >= 60) {
    hours++;
    uptimeMinutes = uptimeMinutes - 60;
  }
  const uptimeSeconds = minutes % 60;
  if (args[0] === 'ms') return msg.channel.send(bot.uptime + ' ms.');
  if (args[0] === 's') return msg.channel.send(uptimeSeconds + ' seconds.');
  if (args[0] === 'min') return msg.channel.send(Math.floor(uptime / 60) + ' minutes ' + uptimeSeconds + ' seconds.');
  msg.channel.send(':clock3: Pokebot has been up for ' + hours + ' hours, ' + uptimeMinutes + ' minutes, and ' + uptimeSeconds + ' seconds.');

};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'uptime',
  description: 'Get the uptime of the bot.',
};
