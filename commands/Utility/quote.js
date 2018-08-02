/****************************************
 * 
 *   Quote: Plugin for Galaxy that gives you quotes.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 * 
 * *************************************/
module.exports.run = async (client, message) => {
const Discord = require('discord.js');

let NewQuote;

  function GetNewQuote(quoteNum = -1) {
    NewQuote = new Discord.RichEmbed();
  
    let quo = require('../assets/quotes.json').quotes

    if (quoteNum == -1) {
      quoteNum = Math.floor(Math.random() * 1000) % quo.length;
      quo=quo[quoteNum];
    }

    const author = quo.author;
    const authorImage = quo.authorImage;
    const quote = quo.quote;
    const year = quo.year;
    const url = quo.url;

    NewQuote.setAuthor(author, authorImage);
    NewQuote.setColor(0x36393e);
    NewQuote.setDescription(quote);
    NewQuote.setFooter('- ' + year);
    NewQuote.setURL(url);

    return NewQuote;
  }

    const newquote = GetNewQuote();
    message.reply('Alright, here\'s your quote.')
    message.channel.send(newquote);
};

exports.conf = {
    aliases: [],
    guildOnly: false,
  };
  exports.help = {
    name: 'quote',
    description: 'Tells you quotes',
    usage: 'quote',
    category: '- Quote Commands',
  };
  