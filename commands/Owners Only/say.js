/** **************************************
 *
 *   Say: Plugin for PokeBot that sends a message with the provided content.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg, args) => {
  msg.channel.send(args.join(' '));
  msg.delete();
};

exports.checkPermission = (bot, member) => {
  if (!['242775871059001344', '247221105515823104', '236279900728721409'].includes(member.id)) {
    return false;
  }
  return true;
};

exports.conf = {
  aliases: [],
  guildOnly: true
};

exports.help = {
  name: 'say',
  description: 'Control on what the bot says.',
  usage: '<...text>'
};
