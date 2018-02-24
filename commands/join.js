exports.run = async (bot, msg, args) => {
  if (!args.length < 1) return msg.reply('Please choose a team to join');
  switch(args[0])
  {
  case 'mystic': {
    msg.member.addRole(msg.guild.roles.find('name', 'Mystic'));
    break;
  }
  case 'valor' : {
    msg.member.addRole(msg.guild.roles.find('name', 'Valor'));
    break;
  }
  case 'instinct' : {
    msg.member.addRole(msg.guild.roles.find('name', 'Instinct'));
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
