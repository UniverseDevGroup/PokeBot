/** **************************************
 *
 *   Join: Plugin for PokeBot that powers the PokeWorld team system.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg, args) => {
  const isWhitelist = await bot.plugins.whitelist.isWhitelist(msg.guild.id);
  if (!isWhitelist) return msg.reply ('This is a Whiltelisted command. Only whitelisted servers can use this command. Sorry!');

  if (args.length < 1) return msg.reply('Please choose an alliance to join');

  const team = findTeam(msg, args[0]);
  switch (args[0])
  {
    case 'Skull': {
      msg.member.addRole(msg.guild.roles.find('name', 'Skull'));
      msg.reply(`Alright, ${team ? 'you have left team ' + team + ' and ' : 'you have '}joined the alliance 'Skull'.`);
      break;
    }
    case 'DarkSide' : {
      msg.member.addRole(msg.guild.roles.find('name', 'Dark Side'));
      msg.reply(`Alright, ${team ? 'you have left team ' + team + ' and ' : 'you have '}joined the alliance 'Dark Side'.`);
      break;
    }
    default : {
      msg.reply('You did not pick an existing alliance. The list of alliances are as follows:\nDarkSide, Skull');
      break;
    }
  }
};

function findTeam(msg, team) {

  let oldTeam;

  if (msg.member.roles.find('name', 'Skull')) {
    if (team == 'skull') return;
    msg.member.removeRole(msg.guild.roles.find('name', 'Skull'));
    oldTeam = 'Skull';
  }
  else if (msg.member.roles.find('name', 'Dark Side')) {
    if (team == 'DarkSide') return;
    msg.member.removeRole(msg.guild.roles.find('name', 'DarkSide'));
    oldTeam = 'DarkSide';
  }
  return oldTeam;
}

exports.conf = {
  aliases: ['pick', 'choose'],
  guildOnly: true,
};

exports.help = {
  name: 'joinalliance',
  description: 'Join one of the alliances!',
  usage: '<alliance name>',
};
