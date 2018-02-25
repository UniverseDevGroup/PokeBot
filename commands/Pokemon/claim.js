exports.run = async (bot, msg) => {
  if (!msg.channel.name.startsWith('gym-')) return msg.reply('Go into one of the gym channels and try again.');
  if (msg.channel.topic == 'Current Owner: *none*') {
    msg.reply('Alright, you have claimed this gym as yours! Be ready to battle anyone who approaches you');
    msg.channel.setTopic('Current Owner: ' + msg.author.id + '/' + msg.author.tag);
  }
  else {

    const owner = msg.channel.topic.slice(15).substring(0, 18);
    msg.channel.send('<@' + owner + '>, come here as ' + msg.member.displayName + ' wants to battle you.');
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'claim',
  description: 'Claim a gym.',
};
