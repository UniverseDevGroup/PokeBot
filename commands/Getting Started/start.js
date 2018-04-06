/** **************************************
 *
 *   GettingStarted: Plugin for PokeBot that guides the user on how to start a journey.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg) => {
  const { RichEmbed } = require('discord.js');
  if (msg.guild.id != '417088992329334792') return msg.reply ('This is a PokeWorld exclusive command. Sorry!');
  msg.channel.send(
    new RichEmbed()
      .setColor(0x00ae86)
      .setTitle('Getting Started in PokeWorld')
      .addField('PokeCord', 'First off, we need to get you up and running in PokeCord!\n\nMake sure to use the `p!start` command to pick a starter pokemon. Once you have done that, you can start using PokeCord related features in the server!')
      .addField('Teams // Gyms', 'Next, you may join a team using PokeBot. To do this, run the `join` command followed by the team you want to join. You can join `flare` or `skull`. Now, you can start claiming gyms. To do this, run `p:claim` in a gym channel. If no one owns it, the gym will now be yours. However if someone does own it, it will either tell you to lay off (if your team owns the gym), or it will ping the owner of the gym and tell them to battle you. If you lose said battle, you will not recieve the gym. Otherwise, the owner of the gym will have to drop it for you to claim. You can also trade gyms with other members using the `tradegym` command.')
      .addField('The End of the Introduction', 'Now that you have done all of this, you are ready to start your journey in the digital region! Chat with people, make friends, and most importantly, have fun!\n\n-The official "sentience" of the PokeWorld server!')
      .setFooter('PokeBot v1.0')
  );
};

exports.conf = {
  aliases: ['noobs', 'newcomers'],
  guildOnly: true,
};

exports.help = {
  name: 'start',
  description: 'Introduces you to the PokeWorld server!',
};
