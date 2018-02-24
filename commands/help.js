exports.run = (bot, msg, args) => {
  const { RichEmbed } = require('discord.js');
  msg.channel.send(
    new RichEmbed()
      .setColor (0x00ae86)
      .setTitle('PokeBot Command List')
      .setDescription('These are the commands you can use. My prefix is `p:`')
      .addField('Core', 'help\nping', true)
      .addField('Utility', 'suggest', true)
      .setFooter('PokeBot Beta')
  );
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'help',
  description: 'Help.',
  usage: 'help (command)',
};
