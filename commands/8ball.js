exports.run = async (bot, msg, args) => {
  if (args.length < 1) return msg.reply('You need to ask the 8-ball something for it to respond!');

  const responses = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
  ];

  msg.channel.send(':8ball: *' + (responses[Math.floor(Math.random() * responses.length)]) + '*');
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: '8ball',
  description: 'Ask the magic 8-ball something. It will answer back, and be as much of a smart-alac as it wants to.',
  usage: '<...question>',
  category: 'Fun',
};
