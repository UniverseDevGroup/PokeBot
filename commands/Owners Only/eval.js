/** **************************************
 *
 *   Eval / Exec: Plugin for PokeBot that provides diagnostic information.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg, args) => {
  if (!['242775871059001344', '247221105515823104', '236279900728721409'].includes(msg.author.id)) return msg.reply('Nope! You need the person who created this bot to use this command.');
  const { RichEmbed } = require('discord.js');
  const code = args.join(' ');

  let evaled;
  let remove;

  try {
    remove = text => {
      if (typeof(text) === 'string') {
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      } else {
        return text;
      }
    };

    evaled = eval(code);

    if (typeof evaled !== 'string') {
      evaled = require('util').inspect(evaled);
    }

  } catch (err) {
    const embed = new RichEmbed()
      .setAuthor('Eval Error')
      .setDescription('Eval\'s result')
      .addField(':inbox_tray: Input:', `\`\`\`js\n${code}\n\`\`\``)
      .addField(':outbox_tray: Output:', `\`\`\`${err}\`\`\``)
      .setFooter('Eval', bot.user.avatarURL)
      .setColor('RED');
    return msg.channel.send({ embed });
  }

  try {
    const embed = new RichEmbed()
      .setAuthor('Eval Success')
      .setDescription('Eval\'s result')
      .addField(':inbox_tray: Input:', `\`\`\`js\n${code}\n\`\`\``)
      .addField(':outbox_tray: Output:', `\`\`\`js\n${remove(evaled)}\n\`\`\``)
      .setFooter('Eval', bot.user.avatarURL)
      .setColor('GREEN');

    return msg.channel.send({ embed });
  } catch (err) {
    const embed = new RichEmbed()
      .setAuthor('Eval Error')
      .setDescription('Eval\'s result')
      .addField(':inbox_tray: Input:', `\`\`\`js\n${code}\n\`\`\``)
      .addField(':outbox_tray: Output:', `\`\`\`${err}\`\`\``)
      .setFooter('Eval', bot.user.avatarURL)
      .setColor('RED');
    return msg.channel.send({ embed });
  }
};

exports.conf = {
  aliases: ['exec'],
  guildOnly: false,
};

exports.help = {
  name: 'eval',
  description: 'Evaluates Javascript Code',
  usage: '<code>',
};
