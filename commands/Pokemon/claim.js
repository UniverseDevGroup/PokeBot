exports.run = async (bot, msg) => {
  if (!msg.channel.name.startsWith('gym-')) return msg.reply('Go into one of the gym channels and try again.');
  if (msg.channel.topic == 'Current Owner: *none*') {
    msg.reply('Alright, you have claimed this gym as yours! Be ready to battle anyone who approaches you');
    let team;
    if (msg.member.roles.find('name', 'Aqua')) team = 'Aqua';
    if (msg.member.roles.find('name', 'Rocket')) team = 'Rocket';
    if (msg.member.roles.find('name', 'Magma')) team = 'Magma';
    if (!team) return msg.reply('You have to join a team before you can claim a gym.');
    msg.channel.setTopic('Current Owner: ' + msg.author.id + '/' + msg.author.tag + '/' + team);
  }
  else {
    let team;
    if (msg.member.roles.find('name', 'Aqua')) team = 'Aqua';
    if (msg.member.roles.find('name', 'Rocket')) team = 'Rocket';
    if (msg.member.roles.find('name', 'Magma')) team = 'Magma';
    if (!team) return msg.reply('You have to join a team before you can claim a gym.');
    const owner = msg.channel.topic.slice(15).substring(0, 18);
    if (msg.guild.members.find('id', owner).roles.find('name', team)) return msg.reply('Were you looking to add a pokemon to the gym?');
    msg.channel.send('<@' + owner + '>, come here as ' + msg.member.displayName + ' wants to battle you.');
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'claim',
  description: 'Claim a gym.',
};
