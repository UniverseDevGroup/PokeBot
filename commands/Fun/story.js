exports.run = async (bot, msg) => {
  msg.guild.fetchMembers().then(guild =>
  {
    const membersList = guild.members.array();
    const selectedUser1 = membersList[Math.floor(Math.random() * membersList.length)].user;
    const selectedUser2 = membersList[Math.floor(Math.random() * membersList.length)].user;
    const selectedUser3 = membersList[Math.floor(Math.random() * membersList.length)].user;

    const stories =
    [
      `${selectedUser1.username} bought ${selectedUser2} his favorite video game. This game is called "Pokemon". Then, they became best friends.`,
      `${selectedUser1.username} jumps out the window. Then, ${selectedUser2.username} saves ${selectedUser1.username}, and ${selectedUser3.username} claps.`,
    ];
    const storySelected = [Math.floor(Math.random() * stories.length)];
    const { RichEmbed } = require('discord.js');
    const embed = new RichEmbed()
      .setColor(0x00ae86)
      .setTitle('PokeBot Storytime')
      .setDescription(stories[storySelected])
      .setFooter('PokeBot Beta');
    msg.channel.send({ embed });
  });
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'story',
  description: 'Tells you a story.',
};
