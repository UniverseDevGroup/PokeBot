/****************************************
 *
 *   Join: Plugin for PokeBot that powers the PokeWorld team system.
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
  if (args.length < 1) return msg.reply('Please choose a team to join');

  const team = findTeam(msg, args[0]);
  switch(args[0])
  {
  case 'aqua': {
    msg.member.addRole(msg.guild.roles.find('name', 'Aqua'));
    msg.reply(`Alright, ${team ? 'you have left team ' + team + ' and ' : 'you have '}joined team Aqua.`);
    break;
  }
  case 'rocket' : {
    msg.member.addRole(msg.guild.roles.find('name', 'Rocket'));
    msg.reply(`Alright, ${team ? 'you have left team ' + team + ' and ' : 'you have '}joined team Rocket.`);
    break;
  }
  case 'magma' : {
    msg.member.addRole(msg.guild.roles.find('name', 'Magma'));
    msg.reply(`Alright, ${team ? 'you have left team ' + team + ' and ' : 'you have '}joined team Magma.`);
    break;
  }
  default : {
    msg.reply('You have to pick, aqua, rocket, or magma.');
    break;
  }
  }
};

function findTeam(msg, team) {

  let oldTeam;

  if (msg.member.roles.find('name', 'Aqua')) {
    if (team == 'aqua') return;
    msg.member.removeRole(msg.guild.roles.find('name', 'Aqua'));
    oldTeam = 'Aqua';
  }
  else if (msg.member.roles.find('name', 'Rocket')) {
    if (team == 'rocket') return;
    msg.member.removeRole(msg.guild.roles.find('name', 'Rocket'));
    oldTeam = 'Rocket';
  }
  else if (msg.member.roles.find('name', 'Magma')) {
    if (team == 'magma') return;
    msg.member.removeRole(msg.guild.roles.find('name', 'Magma'));
    oldTeam = 'Magma';
  }
  return oldTeam;
}

exports.conf = {
  aliases: ['pick', 'choose'],
  guildOnly: true,
};

exports.help = {
  name: 'join',
  description: 'Join one of the teams!',
  usage: '<aqua/rocket/magma>',
};
