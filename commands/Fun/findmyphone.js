/** **************************************
 *
 *   FindMyPhone: Plugin for PokeBot that "helps you find your phone".
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg) => {
  const cities = [
    'Aurora',
    'Montgomery',
    'Chandler',
    'Boise',
    'Fresno',
    'Lubbock',
    'Miami',
    'Stockton',
    'Colorado Springs',
    'Portland',
    'Cincinnati',
  ];

  msg.channel.send(cities[Math.floor(Math.random() * cities.length)]);
};

exports.conf = {
  aliases: ['findphone', 'findmyiphone', 'findmyandroid', 'findmyandroidphone'],
  guildOnly: true,
};

exports.help = {
  name: 'findmyphone',
  description: 'Find your phone. Not just a random list of cities being randomly picked.',
};
