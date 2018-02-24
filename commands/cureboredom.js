exports.run = (bot, msg, args) => {
  const ideas = [
    'Pokemon Go to the polls :ballot_box:',
    'Consuming Maccas :fries:',
    'Fighting AstralMod :right_facing_fist:',
    'Joining a team :handshake:',
    'Have a battle :crossed_swords:',
  ];

  if (args[0] === 'list') return msg.channel.send(ideas.join('\n'));

  msg.channel.send(ideas[Math.floor(Math.random() * ideas.length)]);
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'cureboredom',
  description: 'Finds you something to do.',
  category: 'Fun',
};