/****************************************
 * 
 *   Info: Plugin for Galaxy that tells you about the server host info.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 * 
 * *************************************/
module.exports.run = async (client, message) => {
    const Discord = require('discord.js');
    const os = require('os');
    const embed = new Discord.RichEmbed()
      .setTitle('Information on AleeBot\'s Host')
      .addField('OS Hostname: ', os.hostname() , true)
      .addField('NodeJS Version: ', process.versions.node , true)
      .addField('OS Platform: ', os.platform() , true)
      .addField('OS Version: ', os.release() , true)
      .setColor('#1fd619');
    message.channel.send({embed});
  };
  
  exports.conf = {
    aliases: [],
    guildOnly: false,
  };
  exports.help = {
    name: 'info',
    description: 'Tells you information about the bot',
    usage: 'info',
    category: '- Information Commands',
  };
  