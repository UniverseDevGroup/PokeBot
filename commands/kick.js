exports.run = (bot, msg, args) => {
  if (!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('You don\'t have permssion to kick members');
  if (!msg.guild.member(bot.user).hasPermission('KICK_MEMBERS')) return msg.reply('I don\'t have permssion to kick members');
  const member = msg.mentions.members.first();
  member.kick(args.join(' ').slice(3 + member.user.id.length)).then(() => {
    msg.channel.send(`Alright, I kicked **${member.user.tag}** for the reason **${args.join(' ').slice(3 + member.user.id.length)}**`);
  });
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'kick',
  description: 'Kick a user out of the server',
  usage: '@<User> <...reason>',
  category: 'Moderation',
};
