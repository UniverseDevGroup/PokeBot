exports.run = (bot, msg) => {
  if (!['242775871059001344', '247221105515823104', '236279900728721409'].includes(msg.author.id)) {
    msg.reply('Nope! You need the person who created this bot to use this command.');
  }
  else {
    msg.reply(':warning: Pokebot is now powering off!');
    console.log('Pokebot is now powering off...');
    process.exit(0);
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'poweroff',
  description: 'Powers off the bot.',
  category: 'Owners Only',
};
