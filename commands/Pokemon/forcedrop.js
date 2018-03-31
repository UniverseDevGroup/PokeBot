/** **************************************
 *
 *   Ban: Plugin for PokeBot that powers the PokeWorld gym system.
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
  const isWhitelist = await bot.plugins.whitelist.isWhitelist(msg.guild.id);
  if (!isWhitelist) return msg.reply ('This is a Whiltelisted command. Get your server whitelisted by joining our server at https://discord.me/thedigitalregion and asking in the general channel. Sorry!');

  if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You don\'t have permssion to ban members.');
  if (!msg.channel.name.startsWith('gym-')) return msg.reply('Go into one of the gym channels and try again.');
  if (msg.channel.topic == 'Current Owner: *none*') {
    msg.reply('This gym does not have an owner.');
  }
  else {
    msg.channel.setTopic('Current Owner: *none*');
    msg.channel.send('You have dropped the gym.');
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'forcedrop',
  description: 'Force a gym to have no owner.',
};
