/** **************************************
 *
 *   Ban: Plugin for PokeBot that performs moderation actions.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
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
    const logChannel = await bot.plugins.settings.getStr('logs', msg.guild.id);
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
