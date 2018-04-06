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

  if (!bot.plugins.gyms.isOwned(msg.channel.topic)) {
    const team = bot.plugins.gyms.getTeam(msg.member);
    if (!team) return msg.reply('You have to join a team before you can claim a gym.');
    msg.reply('Alright, you have claimed this gym as yours! Be ready to battle anyone who approaches you');
    return msg.channel.setTopic(bot.plugins.gyms.getGymString(bot, msg.member));
  }

  const team = bot.plugins.gyms.getTeam(msg.member);
  if (!team) return msg.reply('You have to join a team before you can claim a gym.');

  const owner = bot.plugins.gyms.getOwnerId(msg.channel.topic);
  if (msg.guild.members.find('id', owner).roles.find('name', team)) return msg.reply('Don\'t try battling your own team. They won\'t like you.');

  if (bot.gyms.get(msg.channel.id) != null) return msg.reply('Nope, someone is already battling the gym.');

  msg.channel.send('<@' + owner + '>, come here as ' + msg.member.displayName + ' wants to battle you.');

  const func = async mess => {
    if (mess.channel != msg.channel) return;
    if (!mess.embeds[0] &&
        !mess.embeds[0].description &&
        !mess.embeds[0].description.split('\n')[0] &&
        !mess.embeds[0].description.split('\n')[0].split(' ')[0]
    ) return;

    const field = mess.embeds[0].description.split('\n')[0].split(' ')[0];
    const user = msg.guild.members.find(member => member.user.username === field);
    if (!user) return;
    if (user.id == owner) {
      await msg.channel.send('The owner has not been defeated!');
    }
    else if (user.id == msg.author.id) {
      await msg.channel.send('The owner has been defeated! Transferring gym!');
      bot.gyms.getTeam(mess.member);
      await msg.channel.setTopic(bot.plugins.gyms.getGymString(bot, mess.member));
    }
    else { return; }
    bot.gyms.set(msg.channel.id, null);
    bot.removeListener('message', func);
  };
  bot.gyms.set(msg.channel.id, func);
  bot.on('message', func);
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'claim',
  description: 'Claim a gym.',
};
