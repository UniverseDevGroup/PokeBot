exports.run = async (bot, msg) => {
  if (msg.member.roles.find('name', 'Aqua')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Aqua'));
    msg.reply('Alright, you are not longer in team Aqua.');
  }
  else if (msg.member.roles.find('name', 'Rocket')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Rocket'));
    msg.reply('Alright, you are not longer in team Rocket.');
  }
  else if (msg.member.roles.find('name', 'Magma')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Magma'));
    msg.reply('Alright, you are not longer in team Magma.');
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
