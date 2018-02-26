/** **************************************
 *
 *   CureBoredom: Plugin for PokeBot that "cures" your boredom.
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

exports.run = (bot, msg, args) => {
  const ideas = [
    'Pokemon Go to the polls :ballot_box:',
    'Consuming Maccas :fries:',
    'Fighting AstralMod :right_facing_fist:',
    'Joining a team :handshake:',
    'Have a battle :crossed_swords:',
    'Playing The Peacenet :peace:',
    'Becoming Tyson :computer:',
    'Finding Bugs :bug:',
    'Being with Ayana :couple:',
    'Playing OS dressup :womans_clothes:',
    'Chatting with friends :speech_balloon:',
    'Livestreaming :satellite:',
    'Programming a Discord Bot :man_dancing:',
    'Listening to Anders Enger Jensen :musical_note:',
    'Messing with Rich Presence :gear:',
    'Making videos :movie_camera:',
    'Taking pictures :camera:',
    'Suggesting things for the server :dancers:',
  ];

  if (args[0] === 'list') return msg.channel.send(ideas.join('\n'));

  msg.channel.send(ideas[Math.floor(Math.random() * ideas.length)]);
};

exports.conf = {
  aliases: ['cboredom'],
  guildOnly: true,
};

exports.help = {
  name: 'cureboredom',
  description: 'Finds you something to do.',
};
