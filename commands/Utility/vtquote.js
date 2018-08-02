/****************************************
 * 
 *   VTQuote: Plugin for Galaxy that tells you VT quotes.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 * 
 * *************************************/
module.exports.run = async (client, message) => {
    const Discord = require('discord.js');
    
    let VictorQuote;
    
      function GetVictorQuote(quoteNum = -1) {
        VictorQuote = new Discord.RichEmbed();
      
        let quo = require('../assets/vtquotes.json').quotes
    
        if (quoteNum == -1) {
          quoteNum = Math.floor(Math.random() * 1000) % quo.length;
          quo=quo[quoteNum];
        }
    
        const author = quo.author;
        const authorImage = quo.authorImage;
        const quote = quo.quote;
        const year = quo.year;
        const url = quo.url;
    
        VictorQuote.setAuthor(author, authorImage);
        VictorQuote.setColor('#1fd619');
        VictorQuote.setDescription(quote);
        VictorQuote.setFooter('- ' + year);
        VictorQuote.setURL(url);
    
        return VictorQuote;
      }
    
        const victorquote = GetVictorQuote();
        message.reply('Alright, here\'s your Victor quote.')
        message.channel.send(victorquote);
    };
    
    exports.conf = {
        aliases: [],
        guildOnly: false,
      };
      exports.help = {
        name: 'vtquote',
        description: 'Tells you quotes when victor accidentaly swore.',
        usage: 'vtquote',
        category: '- Quote Commands',
      };
      