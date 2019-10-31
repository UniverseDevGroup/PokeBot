/****************************************
 * 
 *   LeaveGuild: Plugin for PokeBot that leaves a guild
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 * 
 * *************************************/
module.exports.run = async (bot, msg) => {
    msg.channel.send('Alright, I\'m leaving the server now. Bye everyone!')
    msg.guild.leave();
  };

  exports.checkPermission = (bot, member) => {
    if (!['242775871059001344', '247221105515823104', '236279900728721409'].includes(member.id)) return false;
    return true;
  }

  exports.conf = {
    aliases: [],
    guildOnly: true,
  };
  exports.help = {
    name: 'leaveguild',
    description: 'Makes the bot leave the server',
  };

