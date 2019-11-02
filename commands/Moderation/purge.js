/** **************************************
 *
 *   Purge: Plugin for PokeBot that performs moderation actions.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg, args) => {
  if (!msg.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) {
    return msg.reply('I don\'t have permission to manage messages.');
  }

  const user = msg.mentions.users.first();
  const amount = parseInt(args[0]) ? parseInt(args[0]) : parseInt(args[1]);

  if (!amount) {
    return msg.reply('How many message shall I delete?');
  }
  if (!amount && !user) {
    return msg.reply('Tell me the user and amount or the just the amount of messages to purge.');
  }
  if (amount > 100 || amount < 3) {
    return msg.reply('Choose an amount less than 98 and greater than 1');
  }
  msg.delete();

  let msgs = await msg.channel.fetchMessages({limit: amount});
  if (user) {
    const filterBy = user ? user.id : bot.user.id;
    msgs = msgs.filter(m => m.author.id === filterBy).array().slice(0, amount);
  }
  msg.channel.bulkDelete(msgs).catch(error => console.log(error.stack));
};

exports.checkPermission = (bot, member) => {
  if (!member.hasPermission('MANAGE_MESSAGES')) {
    return 'You don\'t have permission to manage messages.';
  }
  return true;
};

exports.conf = {
  aliases: ['prune', 'rm'],
  guildOnly: true
};

exports.help = {
  name: 'purge',
  description: 'Get rid of messages quickly.',
  usage: '@user <messages>'
};
