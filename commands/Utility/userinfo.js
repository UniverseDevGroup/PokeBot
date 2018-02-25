exports.run = async (bot, msg) => {

    if (!mentions) {
        var user = msg.author;
    } else {
        var user = msg.mentions.members.first();
    };
    const { RichEmbed } = require('discord.js');
    msg.channel.send(
        new RichEmbed()
        .setColor(0x00ae86)
        .setTitle(`User Information`)
        .addField('User ID', user.id)
        .addField('Account Creation Date', user.user.createdAt)
        .addField('Join Guild Date', user.joinedAt)
        .addField('Names', 'Display Name: ' + user.displayName + `\nUsername: ${user.user.tag}`)
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
