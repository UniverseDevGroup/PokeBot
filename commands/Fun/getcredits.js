/** **************************************
 *
 *   Get Credits: Plugin for PokeBot that gives you credits.
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
const commandCooldown = new Set();

exports.run = (bot, msg) => {
  if (commandCooldown.has(msg.author.id)) return msg.reply('You have claimed credits too recently')
  
  
  bot.plugins.economy.add(msg.author.id, 25);
  msg.reply('Added 25 credits.');

  commandCooldown.add(msg.author.id);
    setTimeout(() => {
    commandCooldown.delete(msg.author.id);
    }, 3600000);
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'getcredits',
  description: 'Add credits to your account.',
};
