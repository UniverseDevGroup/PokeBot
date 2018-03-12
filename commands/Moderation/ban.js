/** **************************************
 *
 *   Ban: Plugin for PokeBot that performs moderation actions.
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
  if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('You don\'t have permission to ban members.');
  if (!msg.guild.member(bot.user).hasPermission('BAN_MEMBERS')) return msg.reply('I don\'t have permission to ban members.');

  const member = msg.mentions.members.first();
  if (!member) return await msg.reply('Who am I gonna ban?');
  const reason = args.join(' ').slice(3 + member.user.id.length);

  await member.ban({ days: 7, reason: msg.author.tag + (reason ? ': ' + reason : '') })
    .catch(err => { msg.reply('There was an error.'); console.error(err.stack);});
  msg.channel.send(`Alright, I banned **${member.user.tag}**${(reason ? ` for the reason **${reason}**.` : '.')}`);

  const { RichEmbed } = require('discord.js');
  try {
    const embed = new RichEmbed()
      .setColor(0x00ae86)
      .setAuthor(member.user.tag, member.user.avatarURL)
      .setTitle(`:hammer: **${member.user.tag}**`)
      .setDescription(`*${member.user.tag}* was banned from the server by *${msg.author.tag}*.`)
      .addField('Reason', reason ? reason : '*none*')
      .addField('Moderator', msg.author.tag)
      .setTimestamp()
      .setFooter(`${msg.author.tag} banned ${member.user.tag}`, msg.author.avatarURL);
    msg.guild.channels.find('id', logChannel).send({ embed });
  }
  catch (err) {
    console.error(err.stack);
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'ban',
  description: 'Ban a user from this server.',
  usage: '@user <...reason>',
};
