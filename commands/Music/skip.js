/** **************************************
 *
 *   Skip: Plugin for PokeBot that performs music player actions.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg) => {
  const music = bot.plugins.music;
  music.skip(bot, msg);
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'skip',
  description: 'Skip a song in the queue.',
};
