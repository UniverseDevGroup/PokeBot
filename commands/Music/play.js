/** **************************************
 *
 *   Play: Plugin for PokeBot that performs music player actions.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg, args) => {
  const music = bot.plugins.music;
  if (args[0] == 'sc') {
    args.shift();
    const track = await music.resolveTrack(args.join(' '), true);
    return music.play(bot, msg, track.track);
  }
  const track = await music.resolveTrack(args.join(' '));
  return music.play(bot, msg, track.track);
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'play',
  description: 'Plays a song for you. If sc is not chosen, it\'ll be yt',
  usage : '<sc> <search>',
};
