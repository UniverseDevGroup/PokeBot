exports.run = async (bot, msg) => {
<<<<<<< HEAD
    const { RichEmbed } = require('discord.js');
    if (!msg.mentions.users.first()) {
        var user = msg.author;
    } else {
        var user = msg.mentions.members.first();
    };
    msg.channel.send(
        new RichEmbed()
        .setColor(0x00ae86)
        .setTitle(`User Information`)
        .addField('User ID', user.id)
        .addField('Account Creation Date', user.user.createdAt)
        .addField('Join Guild Date', user.joinedAt)
        .addField('Names', 'Display Name: ' + user.displayName + `\nUsername: ${user.user.tag}`)
=======
  const { RichEmbed } = require('discord.js');
  let user;
  if (!msg.mentions.members.first()) {
    user = msg.member;
  } else {
    user = msg.mentions.members.first();
  }
  msg.channel.send(
    new RichEmbed()
      .setColor(0x00ae86)
      .setTitle('User Information')
      .addField('User ID', user.id)
      .addField('Account Creation Date', user.user.createdAt)
      .addField('Join Guild Date', user.joinedAt)
      .addField('Names', 'Display Name: ' + user.displayName + `\nUsername: ${user.user.tag}`)
>>>>>>> f6c8e529eb06a3d1121feeebb5de6c97eefbc571
  );
};

exports.conf = {
  aliases: ['uinfo', 'userinformation'],
  guildOnly: true,
};

exports.help = {
  name: 'userinfo',
  description: 'Shows information about the mentioned user',
  usage: '@user',
};
