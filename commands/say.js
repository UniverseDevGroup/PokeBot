exports.run = async (bot, msg, args) => {
  if (!['242775871059001344', '247221105515823104', '236279900728721409'].includes(msg.author.id)) {
    msg.reply('Nope! You need the person who created this bot to use this command.');
  }
  else {
    msg.channel.send(args.join(' '));
    msg.delete();
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'say',
  description: 'Control on what the bot says.',
  usage: '<...text>',
  category: 'Owners Only',
};
