/****************************************
 *
 *   Help: Plugin for PokeBot that guides the user on how to use the bot.
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

exports.run = (bot, msg) => {
  const { RichEmbed } = require('discord.js');
  const embed = new RichEmbed();
  embed
    .setColor (0x00ae86)
    .setDescription('Notice: When using a command do not include "<" and ">".\n(Example: p:suggest Test)')
    .setFooter('PokeBot Beta');

  const categories = Array.from(bot.categories.keys());
  categories.forEach(x => {
    let cat = '';
    const commands = bot.categories.get(x);
    commands.forEach(cmd => {
      const command = bot.commands.get(x).get(cmd);
      const usage = command.help.usage ? `*${command.help.usage}* ` : '';
      cat += `**p:${command.help.name}** ${usage}| ${command.help.description} \n`;
    });
    embed.addField(`${x} |`, cat);
  });
  msg.channel.send({ embed });
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'help',
  description: 'Displays this help message.',
};
