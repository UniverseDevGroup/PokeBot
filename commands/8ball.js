exports.run = async (bot, msg, args) => {
    if (args.length < 1) return msg.reply('You need to ask the 8-ball something for it to respond!');

    const responses = [
        ':8ball: *May the odds ever be in your favor...*',
        ':8ball: *Definetely not! Did you ever think that this would work?*',
        ':8ball: *Most definetely*',
        ':8ball: *Seems probable..*',
        ':8ball: *Sure, why not?*',
        ':8ball: *No!*',
        ':8ball: *Probably.*',
        ':8ball: *If a sentience can do a backflip, then this can happen!*'
    ];

    msg.channel.send(responses[Math.floor(Math.random() * responses.length)]);
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
  