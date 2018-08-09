/** **************************************
 *
 *   Help: Plugin for Galaxy that lists commands in a neat fashion.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg, args) => {
  const { RichEmbed } = require('discord.js');
  if (!args[0]) {
    const embed = new RichEmbed();
    embed
      .setColor (0x36393e)
      .setTitle('Galaxy Command Contents')
      .setFooter('Galaxy 2.0 Alpha 1');

    const categories = Array.from(bot.categories.keys());
    categories.forEach(x => {
      let cat = '';
      const commands = bot.categories.get(x);
      commands.forEach(cmd => {
        const command = bot.commands.get(x).get(cmd);
        cat += `**${command.help.name}**\n`;
      });
      embed.addField(x, cat, true);
    });
    msg.channel.send({ embed });
  }
  else {
    const embed = new RichEmbed();
    embed
      .setColor (0x00ae86)
      .setDescription('Notice: When using a command do not include "<" and ">".\n(Example: g:suggest Test)')
      .setFooter('Galaxy 2.0 Alpha 1');

    const categories = Array.from(bot.categories.keys());
    categories.forEach(x => {
      const commands = bot.categories.get(x);
      commands.forEach(cmd => {
        const command = bot.commands.get(x).get(cmd);
        if (command.help.name == args[1]) {
          const usage = command.help.usage ? `*${command.help.usage}* ` : '*none*';
          embed.addField('Name', command.help.name, true);
          embed.addField('Description', command.help.description, true);
          embed.addField('Usage', usage, true);
          embed.addField('Aliases', command.conf.aliases, true);
          msg.channel.send({ embed });
        }
      });
    });
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'help',
  description: 'Displays this help message.',
};
