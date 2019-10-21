/** **************************************
 *
 *   Host Info: Plugin for PokeBot that provides the information of the host.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg) => {
    const { RichEmbed } = require('discord.js');
    const os = require('os');
    const embed = new RichEmbed()
      .setTitle('Information on PokeBot\'s Host')
      .addField('OS Hostname: ', os.hostname() , true)
      .addField('NodeJS Version: ', process.versions.node , true)
      .addField('OS Platform: ', os.platform() , true)
      .addField('OS Version: ', os.release() , true)
      .setColor('#000000');
    msg.channel.send({embed});
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'hinfo',
  description: 'Gives host information to user.',
};
