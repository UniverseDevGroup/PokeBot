/** **************************************
 *
 *   Warn: Plugin for PokeBot that performs moderation actions.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg, args) => {
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
    const reasons = warns.reasons;
    reasons.push(warnReason);
    await db.set(`warns_${msg.guild.id}_${victim.user.id}`, {count : warns.count + 1, reasons : reasons});
  } else {
    await db.set(`warns_${msg.guild.id}_${victim.user.id}`, {count : 1, reasons : [warnReason]});
  }

  const {RichEmbed} = require('discord.js');
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
      .setFooter(`Warned by: ${msg.author.tag}`, msg.author.avatarURL)
  );
};

exports.checkPermission = (bot, member) => {
  if (!member.hasPermission('MANAGE_MESSAGES')) {
    return 'You don\'t have permission to warn.';
  }
  return true;
};

exports.conf = {
  aliases: [],
  guildOnly: true
};

exports.help = {
  name: 'warn',
  description: 'Logs a warning to the user.',
  usage : '@user <reason>'
};
