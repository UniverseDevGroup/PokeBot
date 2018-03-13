/** **************************************
 *
 *   Eval / Exec: Plugin for PokeBot that provides diagnostic information.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * *************************************/

exports.run = async (bot, msg, args) => {
  if (!['242775871059001344', '247221105515823104', '236279900728721409'].includes(msg.author.id)) return msg.reply('Nope! You need the person who created this bot to use this command.');
  const { RichEmbed } = require('discord.js');
  const code = args.join(' ');

  try {
    const str = `var func = async function() {\n    ${code}\n}.bind(this)\nfunc`;

    const toExecute = eval(str);

    const response = await toExecute();

    const util = require('util');
    const output = typeof response === 'string' || typeof response === 'number' ? response : util.inspect(response, { depth: 3 });

    const embed = new RichEmbed()
      .setAuthor('Eval Success')
      .setDescription('Eval\'s result')
      .addField(':inbox_tray: Input:', `\`\`\`js\n${code}\n\`\`\``)
      .addField(':outbox_tray: Output:', `\`\`\`js\n${toExecute()}\n\`\`\``)
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
