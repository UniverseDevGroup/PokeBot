/** **************************************
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
  const isWhitelist = await bot.plugins.whitelist.isWhitelist(msg.guild.id);
  if (!isWhitelist) return msg.reply ('This is a Whiltelisted command. Get your server whitelisted by joining our server at https://discord.me/thedigitalregion and asking in the general channel. Sorry!');

  if (args.length < 1) return msg.reply('Please choose a team to join');

  const team = findTeam(msg, args[0]);
  switch (args[0])
  {
    case 'skull': {
      msg.member.addRole(msg.guild.roles.find('name', 'Skull'));
      msg.reply(`Alright, ${team ? 'you have left team ' + team + ' and ' : 'you have '}joined team Skull.`);
      break;
    }
    case 'flare' : {
      msg.member.addRole(msg.guild.roles.find('name', 'Flare'));
      msg.reply(`Alright, ${team ? 'you have left team ' + team + ' and ' : 'you have '}joined team Flare.`);
      break;
    }
    default : {
      msg.reply('You have to pick skull, or flare.');
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
  else if (msg.member.roles.find('name', 'Flare')) {
    if (team == 'flare') return;
    msg.member.removeRole(msg.guild.roles.find('name', 'Flare'));
    oldTeam = 'Flare';
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
