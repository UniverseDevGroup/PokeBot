/** **************************************
 *
 *   Poweroff: Plugin for Galaxy that remotely exits the process.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg) => {
  if (!['242775871059001344', '247221105515823104', '236279900728721409'].includes(msg.author.id)) {
    msg.reply('Nope! You need the person who created this bot to use this command.');
  }
  else {
    await msg.reply(':warning: Galaxy is now powering off!');
    console.log('Galaxy is now powering off...');
    process.exit(0);
  }
};

exports.conf = {
  aliases: ['reboot', 'restart'],
  guildOnly: true,
};

exports.help = {
  name: 'poweroff',
  description: 'Powers off the bot.',
};
