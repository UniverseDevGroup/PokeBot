/** **************************************
 *
 *   List Warns: Plugin for PokeBot that performs moderation actions.
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
  const db = require('quick.db');
  const { RichEmbed } = require('discord.js');

  const warns = await db.fetch(`warns_${msg.guild.id}_${msg.author.id}`);
  if (!warns) return await msg.reply('Yay! You have no warns.');
  const embed = new RichEmbed()
    .setTitle('Warns');
  for (let i = 0; i < warns.count; i++) {
    embed.addField('Warning #' + i+1, warns.reasons[i]);
  }
  msg.channel.send({ embed });
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'lswarns',
  description: 'Shows all the warnings a user has.',
};
