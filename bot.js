const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const readline = require('readline');
const DBL = require('dblapi.js');
if (typeof config.dbltoken == 'undefined') {
    console.log("Skipping DBL...");
} else {
    bot.dbl = new DBL(config.dbltoken, bot);
    console.log("DBL has been found...");

}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = new Discord.Collection();
bot.queue = new Discord.Collection();
bot.plugins = {
  economy : require('./plugins/economy.js'),
  settings : require('./plugins/settings.js'),
  whitelist: require('./plugins/whitelist.js'),
  gyms : require('./plugins/gyms.js')};
cmdLoader();

bot.Raven = require('raven');
bot.Raven.config(config.sentry).install();
bot.gyms = new Discord.Collection();

async function cmdLoader() {
  const categories = await fs.readdirSync('./commands');
  console.log(`Loading ${categories.length} categories(s) into memory\n`);
  categories.forEach(x => {
    loadGroup(x);
  });
}
async function loadGroup(name) {
  const files = await fs.readdirSync(`./commands/${name}`);

  console.log(`Loading the category '${name}' into memory with a total of ${files.length} command(s)`);

  bot.commands.set(name, new Map());
  bot.aliases.set(name, new Map());

  const commands = [];
  files.forEach(x => {
    loadCmd(name, x);
    commands.push(x.split('.')[0]);
  });

  bot.categories.set(name, commands);
  console.log(`The category ${name} has been loaded.\n`);
}

async function loadCmd(category, cmd) {
  try {
    console.log(`Loading the Command ${cmd.split('.')[0]}`);
    const command = require(`./commands/${category}/${cmd}`);
    bot.commands.get(category).set(command.help.name, command);
    command.conf.aliases.forEach(alias => {
      console.log(`Loading the alias ${alias} for the command ${command.help.name}`);
      bot.aliases.get(category).set(alias, command.help.name);
    });
  }
  catch (err) {
    console.log(`An error has occured trying to load the command '${cmd.split('.')[0]}'`);
    console.log(err.stack);
    bot.Raven.captureException(err);
  }
}


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
      bot.Raven.captureException(err);
    }
  });
  console.log('Event Loading complete!');
  console.log('\n');
});

rl.on('line', function(cmd) {
  const args = cmd.split(' ');
  switch (args[0]) {
    case 'guilds':
      if (bot.guilds.size === 0) {
        console.log(('[!] No guilds found.'));
      } else {
        console.log('[i] Here\'s the servers that PokeBot is connected to:');
        for (const [id, guild] of bot.guilds) {
          console.log(`   Guild Name: ${guild.name} - ID: ${guild.id}`);
        }
      }
      break;
    case 'channels':
      if (!args[1]) {
        console.log('[!] Please insert the guild\'s ID.');
      } else {
        var guild = bot.guilds.get(args[1]);
        console.log('[i] Here\'s the channels that this guild have:');
        for ([id, channel, guild] of guild && bot.channels) {
          console.log(`   Channel: #${channel.name} - ID: ${channel.id}`);
        }
      }
      break;
    case 'leave':
      if (!args[1]) {
        console.log('[!] Please insert the guild\'s ID.');
      } else {
        var guild = bot.guilds.get(args[1]);
        guild.leave();
      }
      break;
    case 'broadcast':
      if (!args[1]) {
        console.log('[!] Please insert the guild\'s ID.');
      } else {
        const broadcast = args.join(' ').slice(48);
        var guild = null;
        guild = bot.guilds.get(args[1]);
        var channel = null;
        channel = guild.channels.get(args[2]);
        if (channel != null) {
          channel.send(broadcast);
        }
        if (channel = null) {
          console.log ('Usage: broadcast [guildID] [channelID]');
        }
      }
      break;
    case 'exit':
      console.log('[i] PokeBot will now exit!');
      bot.user.setStatus('invisible');
      process.exit(0);
      break;
    case 'help':
      var msg = ('PokeBot Console Help\n\n');
      msg += ('guilds - Shows all guilds that PokeBot\'s on.\n');
      msg += ('channels - Shows all the channels that the guilds have.\n');
      msg += ('leave - Leaves a guild.\n');
      msg += ('broadcast - Broadcasts a message to a server.\n');
      msg += ('help - Shows this command.\n');
      msg += ('exit - Exits PokeBot.\n');
      console.log(msg);
      break;
    default:
      console.log('Unknown Command type \'help\' to list the commands...');
  }
  rl.prompt();
});

process.on('unhandledRejection', (err) => {
  console.error(err.stack);
  bot.Raven.captureException(err);
});
bot.login(config.token).then(() => {
  rl.prompt();
});
