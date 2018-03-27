/** **************************************
 *
 *   Music: Plugin for PokeBot that interacts with the Lavalink API.
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
