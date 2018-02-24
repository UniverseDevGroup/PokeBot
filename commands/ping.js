exports.run = (bot, msg) => {
  msg.channel.send(':ping_pong: Pong! ' + Math.floor(bot.ping) + 'ms.');
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'ping',
  description: 'Pings the bot and replies with the latency.',
  category:'Getting Started',
};
