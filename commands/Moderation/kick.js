/****************************************
 *
 *   Kick: Plugin for PokeBot that performs moderation actions.
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
  if (!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('You don\'t have permssion to kick members.');
  if (!msg.guild.member(bot.user).hasPermission('KICK_MEMBERS')) return msg.reply('I don\'t have permssion to kick members.');

  const member = msg.mentions.members.first();
  if (!member) return await msg.reply('Who am I gonna kick?');
  const reason = args.join(' ').slice(3 + member.user.id.length);

  await member.kick(msg.author.tag + ': ' + (reason ? ': ' + reason : ''))
    .catch(err => { msg.reply('There was an error.'); console.error(err.stack);});
  msg.channel.send(`Alright, I kicked **${member.user.tag}**${(reason ? ` for the reason **${reason}**.` : '.')}`);
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'kick',
  description: 'Kick a user out of the server.',
  usage: '@user <...reason>',
};
