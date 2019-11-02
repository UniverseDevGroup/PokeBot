/** **************************************
 *
 *   TradeGym: Plugin for PokeBot that powers the PokeWorld gym system.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg) => {
  const isWhitelist = await bot.plugins.whitelist.isWhitelist(msg.guild.id);
  if (!isWhitelist) {
    return msg.reply('This command is still in testing. Only whitelisted servers can use this command. Sorry!');
  }

  if (!msg.channel.name.startsWith('gym-')) {
    return msg.reply('Go into one of the gym channels and try again.');
  }
  let team;
  if (msg.member.roles.find('name', 'Skull')) {
    team = 'Skull';
  }
  if (msg.member.roles.find('name', 'Flare')) {
    team = 'Flare';
  }
  if (msg.channel.topic == `Current Owner: ${ msg.author.id }/${ msg.author.tag }/${ team}`) {
    if (!msg.mentions.members.first()) {
      return msg.reply('Sorry, you have to ping the recipient of the gym!');
    }
    const recipient = msg.mentions.members.first();

    msg.reply(`Trading gym to ${ recipient}`);
    let recipientTeam;
    if (recipient.roles.find('name', 'Skull')) {
      recipientTeam = 'Skull';
    }
    if (recipient.roles.find('name', 'Flare')) {
      recipientTeam = 'Flare';
    }
    msg.channel.setTopic(`Current Owner: ${ recipient.id }/${ recipient.user.tag }/${ recipientTeam}`);
  } else {
    msg.reply('You have to own the gym to be able to trade it!');
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true
};

exports.help = {
  name: 'tradegym',
  description: 'Trade a gym to the pinged member.',
  usage: '@user'
};
