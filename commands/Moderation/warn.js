/** **************************************
 *
 *   Warn: Plugin for PokeBot that performs moderation actions.
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
  if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You don\'t have permission to warn.');
  args.shift();
  const warnReason = args.join(' ');
  const victim = msg.mentions.members.first();

  if (!warnReason) {
    return msg.channel.send('What reason?');
  }
  msg.channel.send(`Successfully logged ${victim.user.tag}'s warning.`);
  const db = require('quick.db');
  const warns = await db.fetch(`warns_${msg.guild.id}_${victim.user.id}`);
  if (warns) {
    await db.set(`warns_${msg.guild.id}_${victim.user.id}`, { count : warns.count + 1, reasons : warns.reasons.push(warnReason)});
  }
  else {
    await db.set(`warns_${msg.guild.id}_${victim.user.id}`, { count : 1, reasons : [warnReason]});
  }

  const { RichEmbed } = require('discord.js');
  const logChannel = await bot.plugins.settings.getStr('logs', msg.guild.id);
  bot.channels.find('id', logChannel).send(
    new RichEmbed()
      .setColor(0x00ae86)
      .setTitle(':warning: Warning')
      .setAuthor(victim.user.tag, victim.user.avatarURL)
      .addField('Warning Reason', warnReason)
      .addField('ID', victim.id, true)
      .addField('Created Account', victim.user.createdAt, true)
      .setTimestamp()
      .setFooter('Warned by: ' + msg.author.tag, msg.author.avatarURL)
  );
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'warn',
  description: 'Logs a warning to the user.',
  usage : '@user <reason>',
};
