/** **************************************
 *
 *   Purge: Plugin for PokeBot that performs moderation actions.
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
  if (!msg.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) return msg.reply('I don\'t have permssion to manage messages.');

  const user = msg.mentions.users.first();
  const amount = parseInt(args[0]) ? parseInt(args[0]) : parseInt(args[1]);

  if (!amount) return msg.reply('How many message shall I delete?');
  if (!amount && !user) return msg.reply('Tell me the user and amount or the just the amount of messages to purge.');
  if (amount > 100 || amount < 3) return msg.reply('Choose an amount less than 98 and greater than 1');
  msg.delete();

  let msgs = await msg.channel.fetchMessages({ limit: amount });
  if (user) {
    const filterBy = user ? user.id : bot.user.id;
    msgs = msgs.filter(m => m.author.id === filterBy).array().slice(0, amount);
  }
  msg.channel.bulkDelete(msgs).catch(error => console.log(error.stack));
};

exports.conf = {
  aliases: ['prune', 'rm'],
  guildOnly: true,
};

exports.help = {
  name: 'purge',
  description: 'Get rid of messages quickly.',
  usage: '@user <messages>',
};
