/** **************************************
 *
 *   CureBoredom: Plugin for PokeBot that "cures" your boredom.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
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
