exports.run = async (bot, msg) => {
  const user = msg.mentions.members.first();
  const { RichEmbed } = require('discord.js');
  msg.channel.send(
    new RichEmbed()
      .setTitle(`Information for ${user.user.tag}`)
      .addField('User ID', user.id)
      .addField('Account Creation Date', user.user.createdAt)
      .addField('Join Guild Date', user.joinedAt)
      .addField('Ban Count', 'The user has been banned on ' + parseInt(banCounts[user.id]) + ' guilds.')
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
