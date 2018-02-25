/****************************************
 *
 *   Story: Plugin for PokeBot that tells the user a story.
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

exports.run = async (bot, msg) => {
  msg.guild.fetchMembers().then(guild =>
  {
    const membersList = guild.members.array();
    const selectedUser1 = membersList[Math.floor(Math.random() * membersList.length)].user;
    const selectedUser2 = membersList[Math.floor(Math.random() * membersList.length)].user;
    const selectedUser3 = membersList[Math.floor(Math.random() * membersList.length)].user;

    const stories =
    [
      `${selectedUser1.username} bought ${selectedUser2.username} his favorite video game. This game is called "Pokemon". Then, they became best friends.`,
      `${selectedUser1.username} wants to become a Pokemon trainer, but he needs to get a Pokemon first!`,
      `One day, ${selectedUser1.username} decided to go to a shop. He took his motorbike. Once he arrived at the shop, he went inside. He headed right, towards the chips. He grabbed a packet, and headed to check-out. He bumped into ${selectedUser2.username} at the counter, and decided to say hi. They had a little chat, and then decided to gossip about ${selectedUser3.username}. Then, as they were saying some horrible things about ${selectedUser3.username}, they unexpectedly showed up! Then, ${selectedUser1.username} and ${selectedUser2.username} got into a fight against ${selectedUser3.username}.\n\nKids, this is why you don't start drama.\nNow ${selectedUser1.username}, ${selectedUser2.username}, and ${selectedUser3.username} are no longer friends.`
    ];
    const storySelected = [Math.floor(Math.random() * stories.length)];
    const { RichEmbed } = require('discord.js');
    const embed = new RichEmbed()
      .setColor(0x00ae86)
      .setTitle('PokeBot Storytime')
      .setDescription(stories[storySelected])
      .setFooter('PokeBot Beta');
    msg.channel.send({ embed });
  });
};

exports.conf = {
  aliases: ['storytime'],
  guildOnly: true,
};

exports.help = {
  name: 'story',
  description: 'Tells you a story.',
};
