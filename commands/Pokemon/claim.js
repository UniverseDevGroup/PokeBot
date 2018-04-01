/** **************************************
 *
 *   Claim: Plugin for PokeBot that powers the PokeWorld gym system.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg) => {
  const isWhitelist = await bot.plugins.whitelist.isWhitelist(msg.guild.id);
  if (!isWhitelist) return msg.reply ('This is a Whiltelisted command. Only whitelisted servers can use this command. Sorry!');
  if (!msg.channel.name.startsWith('gym-')) return msg.reply('Go into one of the gym channels and try again.');
  if (msg.channel.topic == 'Current Owner: *none*') {
    let team;
    if (msg.member.roles.find('name', 'Skull')) team = 'Skull';
    if (msg.member.roles.find('name', 'Flare')) team = 'Flare';
    if (!team) return msg.reply('You have to join a team before you can claim a gym.');
    msg.reply('Alright, you have claimed this gym as yours! Be ready to battle anyone who approaches you');
    msg.channel.setTopic('Current Owner: ' + msg.author.id + '/' + msg.author.tag + '/' + team);
  }
  else {
    let team;
    if (msg.member.roles.find('name', 'Skull')) team = 'Skull';
    if (msg.member.roles.find('name', 'Flare')) team = 'Flare';
    if (!team) return msg.reply('You have to join a team before you can claim a gym.');
    const owner = msg.channel.topic.slice(15).substring(0, 18);
    if (msg.guild.members.find('id', owner).roles.find('name', team)) return msg.reply('Don\'t try battling your own team. They won\'t like you.');
    if (bot.gyms.get(msg.channel.id) != null) return msg.reply('Nope, someone is already battling the gym.');
    msg.channel.send('<@' + owner + '>, come here as ' + msg.member.displayName + ' wants to battle you.');
    const func = async mess => {
      if (mess.channel != msg.channel) return;
      let field = mess.embeds[0];
      if (!field) return;
      field = field.description;
      if (!field) return;
      field = field.split('\n')[0];
      if (!field) return;
      field = field.split(' ')[0];
      if (field != undefined) {
        const user = msg.guild.members.find(member => member.user.username === field);
        if (user != undefined) {
          if (user.id == owner) {
            await msg.channel.send('The owner has not been defeated!');
            bot.gyms.set(msg.channel.id, null);
            bot.removeListener('message', func);
          }
          if (user.id == msg.author.id) {
            await msg.channel.send('The owner has been defeated! Transferring gym!');
            let recipientTeam;
            if (msg.member.roles.find('name', 'Skull')) recipientTeam = 'Skull';
            if (msg.member.roles.find('name', 'Flare')) recipientTeam = 'Flare';
            await msg.channel.setTopic('Current Owner: ' + msg.member.id + '/' + msg.author.tag + '/' + recipientTeam);
            bot.gyms.set(msg.channel.id, null);
            bot.removeListener('message', func);
          }
        }
      }
    };
    bot.gyms.set(msg.channel.id, func);
    bot.on('message', func);
  }
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'claim',
  description: 'Claim a gym.',
};
