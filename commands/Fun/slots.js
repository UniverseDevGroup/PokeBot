/** **************************************
 *
 *   Slots: Plugin for PokeBot that allows you to gamble.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   TLicensed under the Open Software License version 3.0
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
    await bot.plugins.economy.add(msg.author.id, 1000);
    const balance = await bot.plugins.economy.get(msg.author.id);
    return await msg.channel.send('You won 1000 PokeCoins!\nCurrent Balance: ' + balance + ' \n> ' + emojify(number1, number2, number3));
  }
  else if (number2 == number3 - 1 && number1 == number2 - 1) {
    await bot.plugins.economy.add(msg.author.id, 1500);
    const balance = await bot.plugins.economy.get(msg.author.id);
    return await msg.channel.send('You won 1500 PokeCoins!\nCurrent Balance: ' + balance + ' \n> ' + emojify(number1, number2, number3));
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
