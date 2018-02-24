module.exports = (bot, msg) => {
  parseCommand(bot, msg);

  if (msg.mentions != null && msg.mentions.users != null) {
    if (msg.mentions.users.has('416637860146446346')) {
      if (msg.content.toLowerCase().includes('hello') || (msg.content.toLowerCase().includes('hi'))) {
        msg.reply('Hi there.');
      } else if (msg.content.toLowerCase().includes('shut') && msg.content.toLowerCase().includes('up')) {
        msg.reply('Excuse me?');
      }
    }
  }
};


function parseCommand(bot, msg) {
  if (msg.author.bot) return;
  if (!msg.content.startsWith('p:')) return;

  const args = msg.content.slice(2).trim().split(/ +/g);
  const command = args.shift();

  let cmd;

  if (bot.commands.has(command)) {
    cmd = bot.commands.get(command);
  } else if (bot.aliases.has(command)) {
    cmd = bot.commands.get(bot.aliases.get(command));
  }

  if (cmd) {
    if (cmd.conf.guildOnly == true) {
      if (!msg.channel.guild) {
        return msg.channel.createMessage('This command can only be ran in a guild.');
      }
    }
    try {
      cmd.run(bot, msg, args);
    }
    catch (e) {
      console.error('Error while running command' + e.stack);
    }
  }
}
