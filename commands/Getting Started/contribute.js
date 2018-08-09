/** **************************************
 *
 *   Contribute: Plugin for Galaxy that allows users to contribute to the bot's development.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg) => {
  msg.channel.send('Want to help the bot? Here you go: https://github.com/UniverseDevGroup/GalaxyBot.');
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'contribute',
  description: 'Contributing to the bot.',
};
