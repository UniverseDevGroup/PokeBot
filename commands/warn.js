exports.run = (bot, msg, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(':warning: You cannot warn members due to your permission level.');
    let warnReason = args.slice(1);
    var victim = message.mentions.users.first();

    message.channel.send(`Successfully logged ${victim.user.tag}'s warning.`)

    bot.channels.find('name', 'logs').send(
        new Discord.RichEmbed()
          .setColor(0x00ae86)
          .setTitle('Warning')
          .addField('ID', victim.id, true)
          .addField('Created Account', victim.user.createdAt, true)
          .addField('Warning Reason', warnReason)
          .setTimestamp()
          .setFooter('Warned by: ' + message.author.user.tag, message.author.user.avatarURL)
      );
  };
  
  exports.conf = {
    aliases: [],
    guildOnly: true,
  };
  
  exports.help = {
    name: 'warn',
    description: 'Logs a warning to the user.',
    category: 'Moderation',
  };
  