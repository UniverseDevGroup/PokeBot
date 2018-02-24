exports.run = (bot, msg) => {
  msg.channel.send('Want to help the bot? Here you go: https://github.com/PokeWorld/PokeBot.');
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'contribute',
  description: 'Contributing to the bot.',
};
