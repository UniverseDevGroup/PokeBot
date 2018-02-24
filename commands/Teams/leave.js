exports.run = async (bot, msg) => {
  if (msg.member.roles.find('name', 'Mystic')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Mystic'));
    msg.reply('Alright, you are not longer in team Mystic.');
  }
  else if (msg.member.roles.find('name', 'Valor')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Valor'));
    msg.reply('Alright, you are not longer in team Valor.');
  }
  else if (msg.member.roles.find('name', 'Instinct')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Instinct'));
    msg.reply('Alright, you are not longer in team Instinct.');
  }
  else {
    msg.reply('You are not in a team.');
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'leave',
  description: 'Leave the team you currently are in.',
};
