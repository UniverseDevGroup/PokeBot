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
  if (!isWhitelist) {
    return msg.reply('This command is still in testing. Only whitelisted servers can use this command. Sorry!');
  }

  if (args.length < 1) {
    return msg.reply('Please choose a team to join');
  }

  const team = findTeam(msg, args[0].toUpperCase());
  switch (args[0]) {
  case 'skull': {
    msg.member.addRole(msg.guild.roles.find('name', 'Skull'));
    msg.reply(`Alright, ${team ? `you have left team ${ team } and ` : 'you have '}joined team Skull.`);
    break;
  }
  case 'flare' : {
    msg.member.addRole(msg.guild.roles.find('name', 'Flare'));
    msg.reply(`Alright, ${team ? `you have left team ${ team } and ` : 'you have '}joined team Flare.`);
    break;
  }
  default : {
    msg.reply('You have to pick a team (skull, flare.)');
    break;
  }
  }
};

function findTeam(msg, team) {

  let oldTeam;

  if (msg.member.roles.find('name', 'Skull')) {
    if (team == 'skull') {
      return;
    }
    msg.member.removeRole(msg.guild.roles.find('name', 'Skull'));
    oldTeam = 'Skull';
  } else if (msg.member.roles.find('name', 'Flare')) {
    if (team == 'flare') {
      return;
    }
    msg.member.removeRole(msg.guild.roles.find('name', 'Flare'));
    oldTeam = 'Flare';
  }
  return oldTeam;
}

exports.conf = {
  aliases: ['pick', 'choose'],
  guildOnly: true
};

exports.help = {
  name: 'jointeam',
  description: 'Join one of the teams!',
  usage: '<flare/skull>'
};
