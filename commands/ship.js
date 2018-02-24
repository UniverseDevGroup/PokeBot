exports.run = (bot, msg, args) => {
    message.channel.send(message.author.username + " x " + message.guild.members.random().displayName + ':cruise_ship:');
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
  