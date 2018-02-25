/****************************************
 *
 *   8ball: Plugin for PokeBot that allows users to use an 8ball.
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
  if (args.length < 1) return msg.reply('You need to ask the 8-ball something for it to respond!');

  const responses = [
    'May the odds ever be in your favor...',
    'Definetely not! Did you ever think that this would work?',
    'Most definetely',
    'Seems probable..',
    'Sure, why not?',
    'No!',
    'Probably.',
    'If a sentience can do a backflip, then this can happen!',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
  ];

  msg.channel.send(':8ball: *' + (responses[Math.floor(Math.random() * responses.length)]) + '*');
};

exports.conf = {
  aliases: ['ask'],
  guildOnly: true,
};

exports.help = {
  name: '8ball',
  description: 'Ask the magic 8-ball something. It will answer back, and be as much of a smart-alac as it wants to.',
  usage: '<...question>',
};
