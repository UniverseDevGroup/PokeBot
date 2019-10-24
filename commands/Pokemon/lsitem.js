/** **************************************
 *
 *   LSItem: Plugin for lists an item for sale in the marketplace
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg, args) => {
  if (msg.guild.id != '417088992329334792') return msg.reply ('This command is still in early testing, so it is only available within Pokeworld.');

  const { RichEmbed } = require('discord.js');
  const data = args.join(' ').split('|');
  const msgs = await bot.channels.find('id', '428738848420397057').fetchMessages({ limit: 10 });
  const mess = msgs.first();
  if (!mess.embeds) return;
  const id = parseInt(mess.embeds[0].author.name.split(':')[1]) + 1;

  bot.channels.find('id', '428738848420397057').send(
    new RichEmbed()
      .setTitle('A new pokemon is up for sale!')
      .setAuthor('ID: ' + id)
      .addField('Starting Price', data[1], true)
      .addField('Pokemon', data[0], true)
      .addField('Other', data[2], true)
      .addField('Seller', `<@${msg.author.id}>`, true)
      .addField('How to bid', 'DM the seller for the pokemon giving them the id, ' + id)
  );
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'lsitem',
  description: 'List an item to the marketplace.',
  usage: '<pokemon>|<credits>|<other>',
};
