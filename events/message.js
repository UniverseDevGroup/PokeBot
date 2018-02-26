module.exports = (bot, msg) => {
  parseCommand(bot, msg);

  if (msg.mentions != null && msg.mentions.users != null) {
    if (msg.mentions.users.has('417096530596724737')) {
      if (msg.content.toLowerCase().includes('hello') || (msg.content.toLowerCase().includes('hi'))) {
        msg.reply('Hi there.');
      } else if (msg.content.toLowerCase().includes('shut') && msg.content.toLowerCase().includes('up')) {
        msg.reply('Excuse me?');
      } else if (msg.content.toLowerCase().includes('astralmod')) {
        msg.reply('HEY! I hate AstralMod so don\'t talk about it >:((((');
      } else if (msg.content.toLowerCase().includes('ok') && (msg.content.toLowerCase().includes('google'))) {
        msg.reply('Sorry, but I\'m not Google...');
      }
    }
  }
};

function parseCommand(bot, msg) {
  let category;

  const prefix = 'p,';
  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) return;
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift();
  let cmd;

  Array.from(bot.categories.keys()).forEach(i => {
    const cmds = bot.categories.get(i);
    if (cmds.includes(command)) category = i;
    if (bot.aliases.get(i).has(command)) category = i;
  });
  if (!category) return;

  if (bot.commands.get(category).has(command)) {
    cmd = bot.commands.get(category).get(command);
  } else if (bot.aliases.get(category).has(command)) {
    cmd = bot.commands.get(category).get(bot.aliases.get(category).get(command));
  }

  if (cmd) {
    if (cmd.conf.guildOnly == true) {
      if (!msg.channel.guild) {
        return msg.reply('This command can only be ran in a guild.');
      }
    }
    try {
      console.log(`${msg.author.tag} ran the command '${cmd.help.name}' in the guild '${msg.member.guild.name}'`);
      cmd.run(bot, msg, args);
    }
    catch (e) {
      console.error(e.stack);
      msg.channel.send('There was an error trying to process your command. Don\'t worry because this issue is being looked into');
    }
  }
}
