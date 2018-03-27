const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const DBL = require('dblapi.js');
bot.dbl = new DBL(config.dbltoken, bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = new Discord.Collection();
bot.queue = new Discord.Collection();
bot.plugins = { music : require('./Plugins/Music.js') , economy : require('./Plugins/Economy.js'), settings : require('./Plugins/settings.js')};
cmdLoader();

bot.Raven = require('raven');
bot.Raven.config(config.sentry).install();
bot.gyms = new Discord.Collection();
bot.cooldown = [];

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


const { PlayerManager } = require('discord.js-lavalink');
const nodes = [
  { 'host': 'localhost', 'port': 6547, 'region': 'us', 'shard': 1, 'password': 'iamaverysecurepassword' },
];

process.on('unhandledRejection', (err) => {
  console.error(err.stack);
  bot.Raven.captureException(err);
});

bot.login(config.token).then(() => {
  bot.player = new PlayerManager(bot, nodes, { user: bot.user.id, shards: 1, password: 'iamaverysecurepassword' });
});
