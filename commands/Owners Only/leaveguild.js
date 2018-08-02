/****************************************
 * 
 *   LeaveGuild: Plugin for Galaxy that leaves a guild
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 * 
 * *************************************/
module.exports.run = async (client, message) => {
    if (!['242775871059001344', '247221105515823104', '236279900728721409', message.guild.owner.user.id].includes(message.author.id)) return message.reply('Nope! You need the person who created this bot or the owner of this guild to use this command.');
    message.channel.send('Alright, I\'m leaving the server now. Bye everyone!')
    message.guild.leave();
  };
  
  exports.conf = {
    aliases: [],
    guildOnly: false,
  };
  exports.help = {
    name: 'leaveguild',
    description: 'Makes the bot leave the server',
    usage: 'leaveguild',
    category: '- Owners Only',
  };
  