exports.run = async (bot, msg, args) => {
  if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('You don\'t have permssion to ban members.');
  if (!msg.guild.member(bot.user).hasPermission('BAN_MEMBERS')) return msg.reply('I don\'t have permssion to ban members.');

  const member = msg.mentions.members.first();
  if (!member) return await msg.reply('Who am I gonna softban?');
  const reason = args.join(' ').slice(3 + member.user.id.length);

  await member.ban({ days: 7, reason: msg.author.tag + ': ' + (reason ? reason : '') })
    .catch(err => { msg.reply('There was an error.'); console.error(err.stack);});
  await msg.guild.unban(member.user.id).catch(msg.reply('There was an error.'));
  msg.channel.send(`Alright, I softbanned **${member.user.tag}**${(reason ? ` for the reason **${reason}**.` : '.')}`);
  const { RichEmbed } = require('discord.js');
  try {
    const embed = new RichEmbed()
      .setColor(0x00ae86)
      .setAuthor(member.user.tag, member.user.avatarURL)
      .setTitle(`:hammer: **${member.user.tag}**`)
      .setDescription(`*${member.user.tag}* was softbanned from the server by *${msg.author.tag}*.`)
      .addField('Reason', reason ? reason : '*none*')
      .addField('Moderator', msg.author.tag)
      .setTimestamp()
      .setFooter(`${msg.author.tag} softbanned ${member.user.tag}`, msg.author.avatarURL);
    msg.guild.channels.find('name', 'logs').send({ embed });
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
  name: 'softban',
  description: 'Kick the user and delete their messages.',
  usage: '@<user> <...reason>',
  category: 'Moderation',
};
