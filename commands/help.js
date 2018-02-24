exports.run = (bot, msg) => {
  const { RichEmbed } = require('discord.js');
  const embed = new RichEmbed();
  embed
    .setColor (0x00ae86)
    .setDescription('Notice: When using a command do not include "<" and ">".\n(Example: p:suggest Test)')
    .setFooter('PokeBot Beta');

  const categories = [];
  const commands = Array.from(bot.commands.keys());

  commands.forEach(function(x) {
    if (!categories.includes(bot.commands.get(x).help.category)) {
      categories.push(bot.commands.get(x).help.category);
    }
  });

  categories.forEach(function(x) {
    let cat = '';
    commands.forEach(function(command) {
      if (bot.commands.get(command).help.category == x) {
        const usage = bot.commands.get(command).help.usage ? `*${bot.commands.get(command).help.usage}* ` : '';
        cat += `**p:${command}** ${usage}| ${bot.commands.get(command).help.description} \n`;
      }
    });
    embed.addField(`${x} |`, cat);
  });
  msg.channel.send({ embed });
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'help',
  description: 'Displays this help message.',
  category: 'Getting Started',
};
