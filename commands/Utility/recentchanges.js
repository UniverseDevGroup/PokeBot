/****************************************
 * 
 *   Recent Changes: Plugin for Galaxy that tells you about new features and fixes.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 * 
 * *************************************/
module.exports.run = async (client, bot, message) => {
    const { RichEmbed } = require('discord.js');
    
    msg.channel.send(
    new RichEmbed()
      .setColor (0x36393e)
        .setTitle ("These are the newest features")
        .setDescription ("And fixes too!")
        .setFooter ("Galaxy 2.0 Alpha 1");
        .addField ("New Features", "Added the recent changes command. This command tells the user about the newest additions to the bot.\nQuote commands have been added. Heard of Victor? We don't care. Have his quotes anyways! We also have normal quotes from random members of the Universe community too! This comes as the part of a merge between another bot.");
        .addField ("Fixes", "Changed the add1k command name to exploit.\nFixed licensing info")
  );

  };
  
  exports.conf = {
    aliases: [],
    guildOnly: false,
  };
  exports.help = {
    name: 'recentchanges',
    description: 'Tells you information about the bot',
    usage: '',
    category: '- Information Commands',
  };
  
