/** **************************************
 *
 *   TradeGym: Plugin for PokeBot that powers the PokeWorld gym system.
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

  if (!msg.channel.name.startsWith('gym-')) return msg.reply('Go into one of the gym channels and try again.');
  let team;
  if (msg.member.roles.find('name', 'Aqua')) team = 'Aqua';
  if (msg.member.roles.find('name', 'Rocket')) team = 'Rocket';
  if (msg.member.roles.find('name', 'Magma')) team = 'Magma';
  if (msg.channel.topic == 'Current Owner: ' + msg.author.id + '/' + msg.author.tag + '/' + team) {
    if (!msg.mentions.members.first()) return msg.reply('Sorry, you have to ping the recipient of the gym!');
    const recipient = msg.mentions.members.first();

    msg.reply('Trading gym to ' + recipient);
    let recipientTeam;
    if (recipient.roles.find('name', 'Aqua')) recipientTeam = 'Aqua';
    if (recipient.roles.find('name', 'Rocket')) recipientTeam = 'Rocket';
    if (recipient.roles.find('name', 'Magma')) recipientTeam = 'Magma';
    msg.channel.setTopic('Current Owner: ' + recipient.id + '/' + recipient.user.tag + '/' + recipientTeam);
  }
  else {
    msg.reply('You have to own the gym to be able to trade it!');
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'tradegym',
  description: 'Trade a gym to the pinged member.',
  usage: '@user',
};
