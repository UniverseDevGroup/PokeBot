/** **************************************
 *
 *   TriggerEgg: Plugin for PokeBot that manages community events.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg) => {
  if (!['242775871059001344', '247221105515823104', '236279900728721409', '269516487566426112'].includes(msg.author.id)) {
    msg.reply('Nope! You need the person who created this bot to use this command.');
  }
  else {
    if (Math.random() > 0.5) {
      msg.channel.send(':egg: **Egg with regular battle sequence sent!**');
      msg.guild.channels.find('name', 'pokeegghunt').send(':egg: **An egg is available!** First two people to type egg gets to battle!');
    }
    else {
      const gym = msg.guild.channels.find('id', '417138941880434699').children.random();
      msg.channel.send(':egg: **Egg sent with gym battle sequence cent!**');
      msg.guild.channels.find('name', 'pokeegghunt').send(':egg: **An egg is available!** *Someone needs to battle for it though...* Go to <#' + gym.id + '> to get it. In 5 minutes, the person holding the gym gets the egg!');
    }
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'triggeregg',
  description: 'Sends an egg out for players to collect',
};
