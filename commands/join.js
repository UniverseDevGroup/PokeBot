exports.run = async (bot, msg, args) => {
  if (args.length < 1) return msg.reply('Please choose a team to join');

  const team = findTeam(msg, args[0]);
  switch(args[0])
  {
  case 'mystic': {
    msg.member.addRole(msg.guild.roles.find('name', 'Mystic'));
    msg.reply(`Alright, ${team ? 'you have left team ' + team + ' and ' : 'you are have '}joined team Mystic.`);
    break;
  }
  case 'valor' : {
    msg.member.addRole(msg.guild.roles.find('name', 'Valor'));
    msg.reply(`Alright, ${team ? 'you have left team ' + team + ' and ' : 'you are have '}joined team Valor.`);
    break;
  }
  case 'instinct' : {
    msg.member.addRole(msg.guild.roles.find('name', 'Instinct'));
    msg.reply(`Alright, ${team ? 'you have left team ' + team + ' and ' : 'you are have '}joined team Instinct.`);
    break;
  }
  default : {
    msg.reply('You have to pick, mystic, valor, or instinct.');
    break;
  }
  }
};

function findTeam(msg, team) {

  let oldTeam;

  if (msg.member.roles.find('name', 'Mystic')) {
    if (team == 'mystic') return;
    msg.member.removeRole(msg.guild.roles.find('name', 'Mystic'));
    oldTeam = 'Mystic';
  }
  else if (msg.member.roles.find('name', 'Valor')) {
    if (team == 'valor') return;
    msg.member.removeRole(msg.guild.roles.find('name', 'Valor'));
    oldTeam = 'Valor';
  }
  else if (msg.member.roles.find('name', 'Instinct')) {
    if (team == 'instinct') return;
    msg.member.removeRole(msg.guild.roles.find('name', 'Instinct'));
    oldTeam = 'Instinct';
  }
  return oldTeam;
}

exports.conf = {
  aliases: ['pick', 'choose'],
  guildOnly: true,
};

exports.help = {
  name: 'join',
  description: 'Join one of the teams!',
  usage: '<mystic/valor/instinct>',
  category: 'Teams',
};
