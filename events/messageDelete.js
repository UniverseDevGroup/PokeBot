/** **************************************
 *
 *   messageDelete: Plugin for PokeBot that handles deleted messages.
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

module.exports = (bot, msg) => {
  const { RichEmbed } = require('discord.js');
  if(!msg.content) return;
  try {
    const embed = new RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:wastebasket: **${msg.author.tag}**`)
      .setDescription(`A message created by *${msg.author.tag}* was deleted in *${msg.channel}*.`)
      .addField('Deleted Message', msg.content)
      .setTimestamp()
      .setFooter(`Deleted message orginally created by: ${msg.author.tag}`, msg.author.avatarURL);
    msg.guild.channels.find('name', 'logs').send({ embed });
  }
  catch (err) {
    console.error(err.stack);
  }
};
