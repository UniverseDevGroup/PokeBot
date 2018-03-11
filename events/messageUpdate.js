/** **************************************
 *
 *   messageUpdate: Plugin for PokeBot that handles edited messages.
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

module.exports = async (bot, oldMsg, newMsg) => {
  const { RichEmbed } = require('discord.js');
  if (oldMsg.content == newMsg.content) return;
  try {
    const embed = new RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:pencil2: **${oldMsg.author.tag}**`)
      .setDescription(`A message created by *${oldMsg.author.tag}* was edited in *${oldMsg.channel}*.`)
      .addField('Old Message', oldMsg.content)
      .addField('New Message', newMsg.content)
      .setTimestamp()
      .setFooter(`Edited message originally created by: ${oldMsg.author.tag}`, oldMsg.author.avatarURL);
    const logChannel = await bot.plugins.settings.getStr('logs', oldMsg.guild.id);
    newMsg.guild.channels.find('id', logChannel).send({ embed });
  }
  catch (err) {
    console.error(err.stack);
  }
};
