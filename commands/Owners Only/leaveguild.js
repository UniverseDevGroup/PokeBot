/****************************************
 * 
 *   LeaveGuild: Plugin for Galaxy that leaves a guild
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 * 
 * *************************************/
module.exports.run = async (bot, msg) => {
    if (!['242775871059001344', '247221105515823104', '236279900728721409', msg.guild.owner.user.id].includes(msg.author.id)) return msg.reply('Nope! You need the person who created this bot or the owner of this guild to use this command.');
    msg.channel.send('Alright, I\'m leaving the server now. Bye everyone!')
    msg.guild.leave();
  };

  exports.conf = {
    aliases: [],
    guildOnly: true,
  };
  exports.help = {
    name: 'leaveguild',
    description: 'Makes the bot leave the server',
  };

