/** **************************************
 *
 *   Music: Plugin for PokeBot that interacts with the Lavalink API.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.resolveTrack = async (term, sc) => {
  const fetch = require('snekfetch');
  let track = await fetch.get('http://localhost:2344/loadtracks?identifier=' + term, { headers: { Authorization: 'iamaverysecurepassword' } });
  if (!track.body[0]) {
    const search = 'http://localhost:2344/loadtracks?identifier=' + (sc ? 'scsearch:' : 'ytsearch:') + term;
    track = await fetch.get(search, { headers: { Authorization: 'iamaverysecurepassword' } });
  }
  return track.body[0];
};

exports.play = async (bot, msg, track) => {
  const player = await bot.player.join({
    d: {
      guild_id: msg.guild.id,
      channel_id: msg.member.voiceChannelID,
    },
    host: 'localhost',
  });
  if (!bot.queue.has(msg.guild.id)) {
    bot.queue.set(msg.guild.id, []);
    bot.queue.get(msg.guild.id).push(track);
    player.play(bot.queue.get(msg.guild.id).shift());
    player.on('end', () => {
      if (bot.queue.get(msg.guild.id)[0]) {
        player.play(bot.queue.get(msg.guild.id).shift());
      }
      else {
        bot.player.leave(msg.guild.id);
      }
    });
  }
  else {
    bot.queue.get(msg.guild.id).push(track);
  }
};

exports.skip = async (bot, msg) => {
  const player = await bot.player.join({
    guild: msg.guild.id,
    channel: msg.member.voiceChannelID,
    host: 'localhost',
  });
  if (bot.queue.has(msg.guild.id)) {
    player.stop();
    player.emit('end');
  }
  else {
    return msg.channel.send('There is nothing playing.');
  }
};
