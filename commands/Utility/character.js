/** **************************************
 *
 *   Character: Plugin for Galaxy that examines unicode character further.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg, args) => {
  const { RichEmbed } = require('discord.js');
  const embed = new RichEmbed()
    .setTitle('***Character Analysis***')
    .setDescription('Find out the decimal and hexadecimal of each and every character in a string.')
    .setColor('#000');

  const str = args.join(' ');
  if (str.length > 50) return msg.reply('The limit is 50 for how many characters you can input');
  const array = str.split('');

  let decimal = '';
  for (const x in str) {
    decimal += `\`${str.charCodeAt(x)}\`\t${array[x]}\n`;
  }
  embed.addField('*Decimal*', decimal, true);

  let hexadecimal = '';
  for (const x in array) {
    const code = str.charCodeAt(x);
    let codeHex = code.toString(16).toUpperCase();
    while (codeHex.length < 4) {
      codeHex = '0' + codeHex;
    }
    hexadecimal += `\`\\u${codeHex}\`\t${array[x]}\n`;
  }
  embed.addField('*Hexadecimal*', hexadecimal, true);

  msg.channel.send({ embed });
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'character',
  description: 'Gets the decimal and hexadecimal of (a) character(s)',
  usage: '<...characters>',
};
