exports.run = async (bot, msg, args) => {
  if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('You don\'t have permssion to ban members');
  if (!msg.guild.member(bot.user).hasPermission('BAN_MEMBERS')) return msg.reply('I don\'t have permssion to ban members');

  const member = msg.mentions.members.first();
  if (!member) return await msg.reply('Who am I gonna softban?');
  const reason = args.join(' ').slice(3 + member.user.id.length);

  await member.ban({ days: 7, reason: msg.author.tag + ': ' + (reason ? ': ' + reason : '') })
    .catch(err => { msg.reply('There was an error.'); console.error(err.stack);});
  await msg.guild.unban(member.user.id).catch(msg.reply('There was an error.'));
  msg.channel.send(`Alright, I softbanned **${member.user.tag}**${(reason ? ` for the reason **${reason}**.` : '.')}`);
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'softban',
  description: 'Kick the user and delete their messages.',
  usage: '@<User> <...reason>',
  category: 'Moderation',
};
