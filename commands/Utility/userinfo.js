exports.run = async (bot, msg, args) => {
    const Discord = require('discord.js');
    const user = msg.mentions.members.first();

exports.conf = {
  aliases: ['uinfo', 'userinformation'],
  guildOnly: true,
};

exports.help = {
  name: 'userinfo',
  description: 'Shows information about the mentioned user',
  usage: '@user',
};
