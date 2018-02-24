const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

bot.on('ready', () => {
  console.log('PokeBot has finished loading.');
});

bot.on('guildMemberAdd', (member) => {
  bot.channels.get('416633835216830495').send(`Welcome ${member.tag}!`);
  
  const role = member.guild.roles.find('name', 'Trainers');
  member.addRole(role);
});

bot.on('message', (msg) => {
  parseCommand(msg);
});

function parseCommand(msg) {
  if (msg.author.bot) return;
  if (!msg.content.startsWith('p:')) return;

  const args = msg.content.slice(2).split(' ');
  const command = args.shift();

  switch (command)
  {
  case 'help':
    msg.channel.send(
      new Discord.RichEmbed()
        .setColor (0x00ae86)
        .setTitle('PokeBot Command List')
        .setDescription('These are the commands you can use. My prefix is `p:`')
        .addField('Core', 'help\nping', true)
        .setFooter('PokeBot Beta')
    );
    break;
  case 'ping':
    msg.channel.send(':ping_pong: Pong! ' + Math.floor(bot.ping) + 'ms.');
    break;
  }
}
bot.login(config.token);
