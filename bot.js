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


bot.on('ready', () => {
  console.log('PokeBot has finished loading.');
  setGame();
  bot.setInterval(setGame, 200000);
});

bot.on('guildMemberAdd', (member) => {
  bot.channels.get('416633835216830495').send(`Welcome to the server **${member.user.tag}**! Make sure to read the rules! We now have ${member.guild.memberCount} members.`);
  bot.channels.find('name', 'logs').send(
    new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:arrow_right: ${member.user.tag}`)
      .setDescription(`*${member.user.tag}* joined this server.`)
      .addField('ID', member.id, true)
      .addField('Created Account', member.user.createdAt, true)
      .setTimestamp()
      .setFooter(member.user.tag, member.user.avatarURL)
  );
  const role = member.guild.roles.find('name', 'Trainers');
  member.addRole(role);
});

bot.on('guildMemberRemove', (member) => {
  bot.channels.get('416633835216830495').send(`**${member.user.tag}** just left. We now have ${member.guild.memberCount} members left. Aww man...`);
  bot.channels.find('name', 'logs').send(
    new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:arrow_left: ${member.user.tag}`)
      .setDescription(`*${member.user.tag}* left this server.`)
      .addField('ID', member.id, true)
      .addField('Created Account', member.user.createdAt, true)
      .addField('Joined At', member.joinedAt, true)
      .setTimestamp()
      .setFooter(member.user.tag, member.user.avatarURL)
  );
});

bot.on('messageDeleteBulk', (msgs) => {
  try {
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:wastebasket: ${msgs.size}`)
      .setDescription(`${msgs.size} messages in *${msgs.first().channel}* were bulk deleted.`)
      .setTimestamp()
      .setFooter('Messages purged');
    msgs.first().guild.channels.find('name', 'logs').send({ embed });
  }
  catch (err) {
    console.error(err.stack);
  }
});

bot.on('message', (msg) => {
  parseCommand(msg);
});

bot.on('messageUpdate', (oldMsg, newMsg) => {
  if (oldMsg.content == newMsg.content) return;
  try {
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:pencil2: **${oldMsg.author.tag}**`)
      .setDescription(`A message created by *${oldMsg.author.tag}* was edited in *${oldMsg.channel}*.`)
      .addField('Old Message', oldMsg.content)
      .addField('New Message', newMsg.content)
      .setTimestamp()
      .setFooter(`Edited message originally created by: ${oldMsg.author.tag}`, oldMsg.author.avatarURL);
    newMsg.guild.channels.find('name', 'logs').send({ embed });
  }
  catch (err) {
    console.error(err.stack);
  }
});

bot.on('messageDelete', (msg) => {
  try {
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:wastebasket: **${msg.author.tag}**`)
      .setDescription(`A message created by *${msg.author.tag}* was deleted in *${msg.channel}*.`)
      .addField('Deleted Message', msg.content)
      .setTimestamp()
      .setFooter(`Deleted message orginally created by: ${msg.author.tag}`, msg.author.avatarURL);
    msg.guild.channels.find('name', 'logs').send({ embed });
  }
  catch (err) {
    console.error(err.stack);
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
