/** **************************************
 *
 *   Poweroff: Plugin for PokeBot that remotely exits the process.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg) => {
  await msg.reply(':warning: Pokebot is now powering off!');
  await bot.user.setStatus('invisible')
  console.log('Pokebot is now powering off...');
  process.exit(0);
};

exports.checkPermission = (bot, member) => {
  if (!['242775871059001344', '247221105515823104', '236279900728721409'].includes(member.id)) return false;
  return true;
}

exports.conf = {
  aliases: ['reboot', 'restart'],
  guildOnly: true,
};

exports.help = {
  name: 'poweroff',
  description: 'Powers off the bot.',
};
