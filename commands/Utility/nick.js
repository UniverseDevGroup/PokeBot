/** **************************************
 *
 *   Nick: Plugin for PokeBot that changes the user's display name.
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

exports.run = async (bot, msg, args) => {
  const { RichEmbed } = require('discord.js');

  msg.member.setNickname(args.join(' '), 'Requested by bot');
  msg.channel.send('Changed nickname to: ' + args.join(' '));
  const logChannel = await bot.plugins.settings.getStr('logs', msg.member.guild.id);
  bot.channels.find('id', logChannel).send(
    new RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`Nickname: ${msg.author.tag}`)
      .setDescription(`*${msg.author.tag}* changed their nickname`)
      .addField('New Nickname', msg.member.displayName, true)
      .setTimestamp()
      .setFooter('PokeBot v1.0')
  );

};

exports.conf = {
  aliases: ['nickname'],
  guildOnly: true,
};

exports.help = {
  name: 'nick',
  description: 'Change your nickname.',
  usage: '<...new nick>',
};
