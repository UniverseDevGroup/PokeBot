/****************************************
 * 
 *   Interrogate: Plugin for Galaxy that interrogates users
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 * 
 * *************************************/
module.exports.run = async (client, message, args) => {
    if (message.guild.id != '243022206437687296') return message.reply ('This is a ACN exclusive command.');

    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('It looks like that you don\'t have the permissions to jail members.');
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.reply('Uhh... I don\'t have permission to jail members.');

    const member = message.mentions.members.first();
    if (!member) return await message.reply('Uhh... Please mention a member first.');

    member.addRole(message.guild.roles.find('name', 'Interrogation'));
    message.reply(`Alright, I just interrogated ${member.user.tag}.`)
};

exports.conf = {
    aliases: [],
    guildOnly: false,
  };
  exports.help = {
    name: 'interrogate',
    description: 'Interrogates a member',
    usage: 'interrogate [user]',
    category: '- ACN Exclusive Commands',
  };
  