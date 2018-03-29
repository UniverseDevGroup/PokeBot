/** **************************************
 *
 *   LSItem: Plugin for lists an item for sale in the marketplace
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * *************************************/

exports.run = async (bot, msg, args) => {
  if (msg.guild.id != '417088992329334792') return msg.reply ('This is a PokeWorld exclusive command. Sorry!');

  const { RichEmbed } = require('discord.js');
  const data = args.join(' ').split('|');
  const msgs = await msg.channel.fetchMessages({ limit: 10 });
  const mess = msgs.first();
  if (!mess.embeds) return;
  const id = parseInt(mess.embeds[0].author.name.split(':')[0]);

  bot.channels.find('id', suggestionChannel).send(
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
