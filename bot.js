const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');


bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

function setGame() {
  const games = [
    'Pokemon',
    'Catching things',
    'Finding pokemon',
    'Type p:help for help',
    'Fighting AstralMod',
  ];

  bot.user.setPresence({
    status: 'online',
    afk: false,
    game: {
      type: 0,
      name: games[Math.floor(Math.random() * games.length)],
    },
  });
}

fs.readdir('./commands', (err, files) => {
  if (err) console.error(err);
  console.log(`Attempting to load a total of ${files.length} commands into the memory.`);
  files.forEach(file => {
    try {
      const command = require(`./commands/${file}`);
      console.log(`Attempting to load the command "${command.help.name}".`);
      bot.commands.set(command.help.name, command);
      command.conf.aliases.forEach(alias => {
        bot.aliases.set(alias, command.help.name);
        console.log(`Attempting to load "${alias}" as an alias for "${command.help.name}"`);
      });
    }
    catch (err) {
      console.log('An error has occured trying to load a command. Here is the error.');
      console.log(err.stack);
    }
  });
  console.log('Command Loading complete!');
});

fs.readdir('./events', (err, files) => {
  if (err) console.error(err);
  console.log(`Attempting to load a total of ${files.length} events into the memory.`);
  files.forEach(file => {
    try {
      const eventName = file.split('.')[0];
      const event = require(`./events/${file}`);
      console.log(`Attempting to load the event "${eventName}".`);
      bot.on(eventName, event.bind(null, bot));
      delete require.cache[require.resolve(`./events/${file}`)];
    }
    catch (err) {
      console.log('An error has occured trying to load a event. Here is the error.');
      console.log(err.stack);
    }
  });
  console.log('Event Loading complete!');
  console.log('\n');
});

bot.on('ready', () => {
  console.log('PokeBot has finished loading.');
  setGame();
  bot.setInterval(setGame, 200000);
});


bot.on('message', (msg) => {
  parseCommand(msg);

  if (msg.mentions != null && msg.mentions.users != null) {
    if (msg.mentions.users.has('416637860146446346')) {
      if (msg.content.toLowerCase().includes('hello') || (msg.content.toLowerCase().includes('hi'))) {
        msg.reply('Hi there.');
      } else if (msg.content.toLowerCase().includes('shut') && msg.content.toLowerCase().includes('up')) {
        msg.reply('Excuse me?');
      }
    }
  }
});


function parseCommand(msg) {
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
bot.login(config.token);
