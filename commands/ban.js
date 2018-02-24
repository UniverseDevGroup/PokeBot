exports.run = (bot, msg, args) => {
  if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('You don\'t have permssion to ban members');
  if (!msg.guild.member(bot.user).hasPermission('BAN_MEMBERS')) return msg.reply('I don\'t have permssion to ban members');
  const member = msg.mentions.members.first();
  member.ban({ days: 7, reason: msg.author.tag + ': ' + args.join(' ').slice(3 + member.user.id.length) }).then(() => {
    msg.channel.send(`Alright, I banned **${member.user.tag}** for the reason **${args.join(' ').slice(3 + member.user.id.length)}**`);
  });
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'ban',
  description: 'Ban a user from this server.',
  usage: '@<User> <...reason>',
  category: 'Moderation',
};
