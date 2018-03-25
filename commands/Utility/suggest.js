/** **************************************
 *
 *   Suggest: Plugin for PokeBot that allows users to suggest things.
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
  const suggestionChannel = await bot.plugins.settings.getStr('suggestions', msg.member.guild.id);
  bot.channels.find('id', suggestionChannel).send(
    new RichEmbed()
      .setColor (0x00ae86)
      .setTitle('Suggestion')
      .setDescription('This is a suggestion from a community member for something relating to the server. Please rate it based on your opinion, and a staff member will decide what to do with the suggestion.')
      .addField('Suggestion Contents', args.join(' '))
  ).then(message => {
    message.react('\u2705');
    message.react('\u274E');
  });
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'suggest',
  description: 'Suggest a feature for the bot or the server.',
  usage: '<...suggestion>',
};
