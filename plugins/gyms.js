/** **************************************
 *
 *   Gyms: Plugin for PokeBot that enables gym features.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.isTeam = (member) => {
  let team;
  if (member.roles.find('name', 'Skull')) team = 'Skull';
  if (member.roles.find('name', 'Flare')) team = 'Flare';
  return team ? true : false;
};

exports.getTeam = (member) => {
  let team;
  if (member.roles.find('name', 'Skull')) team = 'Skull';
  if (member.roles.find('name', 'Flare')) team = 'Flare';
  return team;
};

exports.getOwnerId = (title) => {
  return title.slice(15).substring(0, 18);
};

exports.getGymString = (bot, member) => {
  return 'Current Owner: ' + member.id + '/' + member.user.tag + '/' + bot.plugins.gyms.getTeam(member);
};

exports.isOwned = (title) => {
  return title == 'Current Owner: *none*';
};
