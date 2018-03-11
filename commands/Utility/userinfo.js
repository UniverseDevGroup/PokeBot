/** **************************************
 *
 *   UserInfo: Plugin for PokeBot that gives the user information about themselves or another user.
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
  const { RichEmbed } = require('discord.js');
  let user;
  if (!msg.mentions.members.first()) {
    user = msg.member;
  } else {
    user = msg.mentions.members.first();
  }
  msg.channel.send(
    new RichEmbed()
      .setColor(0x00ae86)
      .setTitle('User Information')
      .addField('User ID', user.id)
      .addField('Account Creation Date', user.user.createdAt)
      .addField('Join Guild Date', user.joinedAt)
      .addField('Names', 'Display Name: ' + user.displayName + `\nUsername: ${user.user.tag}`)
      .setFooter('PokeBot v1.0')
  );
};

exports.conf = {
  aliases: ['uinfo', 'userinformation'],
  guildOnly: true,
};

exports.help = {
  name: 'userinfo',
  description: 'Shows information about the mentioned user',
  usage: '@user',
};
