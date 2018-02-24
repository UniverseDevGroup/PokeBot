exports.run = (bot, msg) => {
  const { RichEmbed } = require('discord.js');
  const embed = new RichEmbed();
  embed
    .setColor (0x00ae86)
    .setDescription('Notice: When using a command do not include "<" and ">".\n(Example: p:suggest Test)')
    .setFooter('PokeBot Beta');

  const categories = Array.from(bot.categories.keys());
  categories.forEach(x => {
    let cat = '';
    const commands = bot.categories.get(x);
    commands.forEach(cmd => {
      const command = bot.commands.get(x).get(cmd);
      const usage = command.help.usage ? `*${command.help.usage}* ` : '';
      cat += `**p:${command.help.name}** ${usage}| ${command.help.description} \n`;
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
};
