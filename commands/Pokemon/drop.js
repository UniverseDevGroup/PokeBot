exports.run = async (bot, msg) => {
  if (!msg.channel.topic.startsWith('Current Owner:')) return msg.reply('Go into one of the gym channels and try again.');
  if (msg.channel.topic == 'Current Owner: *none*') {
    msg.reply('There is no owner for this gym. Claim it now with p:claim!');
  }
  else {
    const owner = msg.channel.topic.slice(15).substring(msg.author.tag.length - 1);
    if (msg.author.id != owner) {
      return msg.reply('You are not the owner of this gym.');
    }
    else {
      msg.channel.setTopic('Current Owner: *none*');
      msg.channel.send('You have dropped the gym.');
    }
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'drop',
  description: 'Drop a gym.',
};
