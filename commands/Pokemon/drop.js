/** **************************************
 *
 *   Drop: Plugin for PokeBot that powers the PokeWorld gym system.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg) => {
  const isWhitelist = await bot.plugins.whitelist.isWhitelist(msg.guild.id);
  if (!isWhitelist) return msg.reply ('This command is still in testing. Only whitelisted servers can use this command. Sorry!');
  if (!msg.channel.name.startsWith('gym-')) return msg.reply('Go into one of the gym channels and try again.');
  if (msg.channel.topic == 'Current Owner: *none*') {
    msg.reply('There is no owner for this gym. Claim it now with p:claim!');
  }
  else {
    const owner = msg.channel.topic.slice(15).substring(0, 18);
    if (msg.author.id != owner) {
      return msg.reply('You are not the owner of this gym.');
    }
    else {
      msg.channel.setTopic('Current Owner: *none*');
      msg.channel.send('You have dropped the gym.');
    }
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'drop',
  description: 'Drop a gym.',
};
