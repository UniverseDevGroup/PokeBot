/** **************************************
 *
 *   Get Credits: Plugin for PokeBot that gives you credits.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/
const cooldown = new Set();

exports.run = (bot, msg) => {
  if (cooldown.has(msg.author.id)) return msg.reply('You have worked too recently');

  const jobs = [
    "started a BitCoin farm",
    "pissed for an elderly woman",
    "became a doctor and illegally sold organs",
    "extracted eggs from elderly women",
    "became a bus driver",
    "started working for Universe Dev Group",
    "programmed a Discord bot",
    "made a crowdfunding campaign",
    "became a news anchor",
    "flooded Amsterdam",
    "became YouTube famous.",
  ]

  if (bot.dbl.hasVoted(msg.author.id)) {
    var creditsEarned = (Math.random() * Math.floor(650));
    bot.plugins.economy.add(msg.author.id, creditsEarned);
    msg.channel.send('You worked and ' + jobs[Math.floor(Math.random() * jobs.length())] + '\n\nYou earned ' + creditsEarned.toString() + 'credits.');
  }
  else {
    var creditsEarned = (Math.random() * Math.floor(250));
    bot.plugins.economy.add(msg.author.id, creditsEarned);
    msg.channel.send('You worked and ' + jobs[Math.floor(Math.random() * jobs.length())] + '\n\nYou earned ' + creditsEarned.toString() + 'credits.');
  }
  cooldown.add(msg.author.id);
  setTimeout(() => {
    cooldown.delete(msg.author.id);
  }, 3600000);
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'jobs',
  description: 'Work to add credits to your account.',
};
