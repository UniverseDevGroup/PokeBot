exports.run = async (bot, msg, args) => {
    const Discord = require('discord.js');
    const user = msg.mentions.members.first();

    msg.channel.send(
        new RichEmbed()
            .setTitle(`Information for ${user.user.tag}`)
            .addField('User ID', user.id)
            .addField('Account Creation Date', member.user.createdAt)
            .addField('Join Guild Date', user.joinedAt)
            .addField('Ban Count', 'This user has been banned from ' + parseInt(banCounts[user.id]) + ' guilds.')
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
  