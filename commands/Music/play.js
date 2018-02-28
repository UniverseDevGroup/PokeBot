/** **************************************
 *
 *   Play: Plugin for PokeBot that performs music player actions.
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
