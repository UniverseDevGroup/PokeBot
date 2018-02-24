exports.run = async (bot, msg, args) => {
  if (args.length < 1) return msg.reply('Please choose a team to join');
  if (msg.member.roles.find('name', 'Mystic')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Mystic'));
    msg.reply('You have left team Mystic.');
  }
  else if (msg.member.roles.find('name', 'Valor')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Valor'));
    msg.reply('You have left team Valor.');
  }
  else if (msg.member.roles.find('name', 'Instinct')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Instinct'));
    msg.reply('You have left team Instinct.');
  }
  switch(args[0])
  {
  case 'mystic': {
    msg.member.addRole(msg.guild.roles.find('name', 'Mystic'));
    msg.reply('Alright, you are have joined team Mystic.');
    break;
  }
  case 'valor' : {
    msg.member.addRole(msg.guild.roles.find('name', 'Valor'));
    msg.reply('Alright, you have joined team Valor.');
    break;
  }
  case 'instinct' : {
    msg.member.addRole(msg.guild.roles.find('name', 'Instinct'));
    msg.reply('Alright, you have joined team Instinct.');
    break;
  }
  default : {
    msg.reply('You have to pick, mystic, valor, or instinct.');
    break;
  }
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'join',
  description: 'Join one of the teams!',
  usage: '<mystic/valor/instinct>',
  category: 'Teams',
};
