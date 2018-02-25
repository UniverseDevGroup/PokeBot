/****************************************
 *
 *   Drop: Plugin for PokeBot that powers the PokeWorld gym system.
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
  if (!msg.channel.name.startsWith('gym-')) return msg.reply('Go into one of the gym channels and try again.');
  if (msg.channel.topic == 'Current Owner: *none*') {
    msg.reply('There is no owner for this gym. Claim it now with p:claim!');
  }
  else {
    const owner = msg.channel.topic.slice(15).substring(0, 18);
    if (msg.author.id != owner) {
      return msg.reply('You are not the owner of this gym.');
    }
    else {
      msg.channel.setTopic('Current Owner: *none*');
      msg.channel.send('You have dropped the gym.');
    }
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'drop',
  description: 'Drop a gym.',
};
