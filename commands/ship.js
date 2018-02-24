exports.run = (bot, msg) => {
  msg.channel.send(msg.author.username + ' x ' + msg.guild.members.random().displayName + ':cruise_ship:');
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'ship',
  description: 'Test the luck of your love life! Ships you with another user.',
  category: 'Fun',
};
