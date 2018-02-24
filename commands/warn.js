exports.run = (bot, msg, args) => {
  if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You don\'t have permssion to warn.');
  const warnReason = args.slice(1);
  const victim = msg.mentions.users.first();

  msg.channel.send(`Successfully logged ${victim.user.tag}'s warning.`);

  const { RichEmbed } = require('discord.js');
  bot.channels.find('name', 'logs').send(
    new RichEmbed()
      .setColor(0x00ae86)
      .setTitle('Warning')
      .addField('ID', victim.id, true)
      .addField('Created Account', victim.user.createdAt, true)
      .addField('Warning Reason', warnReason)
      .setTimestamp()
      .setFooter('Warned by: ' + msg.author.user.tag, msg.author.user.avatarURL)
  );
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'warn',
  description: 'Logs a warning to the user.',
  usage : '@<user> <reason>',
  category: 'Moderation',
};
