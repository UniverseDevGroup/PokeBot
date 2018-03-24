/** **************************************
 *
 *   Set Suggestions: Plugin for PokeBot that performs moderation actions.
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
    if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You don\'t have permission to manage messages.');
    bot.plugins.settings.setStr('suggestions', args[0], msg.guild.id);
    msg.reply('Alright, I have set the suggestions channel to ' + args[0]);
  };
  
  exports.conf = {
    aliases: [],
    guildOnly: true,
  };
  
  exports.help = {
    name: 'setSuggestions',
    description: 'Set\'s the Suggestions Channel.',
    usage: '<channelID>',
  };
  