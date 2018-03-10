/** **************************************
 *
 *   Slots: Plugin for PokeBot that allows you to gamble.
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

exports.run = async (bot, msg) => {
  const slotNumbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];

  const balance = await bot.plugins.economy.get(msg.author.id);
  if (balance < 10) return await msg.reply('You don\'t have enough credits (10) to play the slots');

  const number1 = slotNumbers[Math.floor(Math.random() * slotNumbers.length)];
  const number2 = slotNumbers[Math.floor(Math.random() * slotNumbers.length)];
  const number3 = slotNumbers[Math.floor(Math.random() * slotNumbers.length)];


  if (number2 == number1 + 1  && number3 == number2 + 1) {
    const balance = await bot.plugins.economy.get(msg.author.id);
    return await msg.channel.send('You won 10 credits!\nCurrent Balance: ' + balance + ' \n> ' + emojify(number1, number2, number3));
  }
  else if (number2 == number3 - 1  && 1 == number2 - 1) {
    await bot.plugins.economy.add(msg.author.id, 15);
    const balance = await bot.plugins.economy.get(msg.author.id);
    return await msg.channel.send('You won 15 credits!\nCurrent Balance: ' + balance + ' \n> ' + emojify(number1, number2, number3));
  }
  else {
    await bot.plugins.economy.subtract(msg.author.id, 10);
    const balance = await bot.plugins.economy.get(msg.author.id);
    return await msg.channel.send('Aww, you lost! Better luck next time.\nCurrent Balance: ' + balance + ' \n> ' + emojify(number1, number2, number3));
  }
};

function emojify(number1, number2, number3) {
  return emote(number1) + ' ' + emote(number2) + ' ' + emote(number3);
}

function emote(number) {
  if (number == 1) return ':one:';
  if (number == 2) return ':two:';
  if (number == 3) return ':three:';
  if (number == 4) return ':four:';
  if (number == 5) return ':five:';
  if (number == 6) return ':six:';
  if (number == 7) return ':seven:';
  if (number == 8) return ':eight:';
  if (number == 9) return ':nine:';
}
exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'slots',
  description: 'Develop a gambling addiction by playing Slots!',
};
