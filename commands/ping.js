exports.run = (bot, msg, args) => {
  msg.channel.send(':ping_pong: Pong! ' + Math.floor(bot.ping) + 'ms.');
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'ping',
  description: 'ping.',
  usage: 'ping',
};
