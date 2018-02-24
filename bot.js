const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

bot.on('ready', () => {
  console.log('PokeBot has finished loading.');
});

bot.on('guildMemberAdd', (member) => {
  bot.channels.get('416633835216830495').send(`Welcome to the server **${member.user.tag}**! Make sure to read the rules in #rules!`);
  const role = member.guild.roles.find('name', 'Trainers');
  member.addRole(role);
});

bot.on('guildMemberRemove', (member) => {
  bot.channels.get('416633835216830495').send(`Aww... **${member.user.tag}** just left...`);
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
        .addField('Utility', 'suggest', true)
        .setFooter('PokeBot Beta')
    );
    break;
  case 'ping':
    msg.channel.send(':ping_pong: Pong! ' + Math.floor(bot.ping) + 'ms.');
    break;
  case 'suggest':
    var suggestionAuthor = msg.author.id;
  
    bot.channels.get('416726932927938570').send(
      new Discord.RichEmbed()
        .setColor (0x00ae86)
        .setAuthor(`${suggestionAuthor.user.tag}`, msg.author.displayavatarURL)
        .setDescription('This is a suggestion from a community member for something relating to the server. Please rate it based on your opinion, and a staff member will decide what to do with the suggestion.')
        .addField('Suggestion Contents', args.join(' '))
    ).then(message => {
      message.react('\u2705');
      message.react('\u274E');
    });
    break;
  }
}
bot.login(config.token);
