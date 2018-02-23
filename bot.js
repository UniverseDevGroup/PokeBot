const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

bot.on('ready', () => {
  console.log('PokeBot has finished loading.');
});

bot.on('guildMemberAdd', (member) => {
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
        .addField('Getting Started |', '**p:help** | Displays this help message')
    );
    break;
  }
}
bot.login(config.token);
