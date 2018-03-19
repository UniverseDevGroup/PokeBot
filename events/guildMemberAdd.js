/** **************************************
 *
 *   GuildMemberAdd: Plugin for PokeBot that setups up and welcomes any new user.
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

module.exports = async (bot, member) => {
  const { RichEmbed } = require('discord.js');
  const logChannel = await bot.plugins.settings.getStr('logs', member.guild.id);
  bot.channels.find('id', logChannel).send(
    new RichEmbed()
      .setColor(0x00ae86)
      .setTitle(`:arrow_right: ${member.user.tag}`)
      .setDescription(`*${member.user.tag}* joined this server.`)
      .addField('ID', member.id, true)
      .addField('Created Account', member.user.createdAt, true)
      .setTimestamp()
      .setFooter(member.user.tag, member.user.avatarURL)
  );
  if (member.guild.id != '417088992329334792') return;
  //try {
    //draw(bot, member);
  //}
  //catch (err)
  //{
    //console.error(err.stack);
  //}
  bot.channels.find('name', 'welcome').send(`Welcome to the server **${member.user.tag}**! Make sure to read the rules! We now have ${member.guild.memberCount} members.`);
  const role = member.guild.roles.find('name', 'Trainers');
  member.addRole(role);
};

/** ****************************************************************************** 
* async function draw(bot, member) {
*  const Canvas = require('canvas');
*  const request = require('request-promise');
*  Canvas.registerFont('./assets/Ketchum.otf', {
*    family: 'Ketchum'
*  });
*  const canvas = Canvas.createCanvas(1500, 500);
*  const ctx = canvas.getContext('2d');
*  const Image = Canvas.Image;
*  const base = new Image();
*  const avatar = new Image();
*  const fs = require('fs');
*
*  avatar.src = await request({
*    uri: member.user.avatarURL,
*    encoding: null
*  });
*  base.src = await fs.readFileSync('./assets/Pokemon_Server_Template.png');
*  ctx.drawImage(base, 0, 0, 1500, 500);
*
*  //tag
*  ctx.font = '96px Ketchum';
*  ctx.fillStyle = '#e5da2a';
*  ctx.strokeStyle = '#3b4cca';
*  ctx.fillText(member.user.tag, 500, 200);
*  ctx.strokeText(member.user.tag, 500, 200);
*
*
*  //guild name
*  ctx.font = '55px Ketchum';
*  ctx.fillStyle = '#fff';
*  ctx.fillText(member.guild.name, 820, 310);
*
*  //avatar
*  ctx.globalAlpha = 1;
*  ctx.beginPath();
*  ctx.arc(208, 267, 166, 0, 2 * Math.PI, true);
*  ctx.closePath();
*  ctx.clip();
*  ctx.drawImage(avatar, 43, 101, 329, 331);
*
*  return bot.channels.find('name', 'welcome').send({
*    files: [{
*      attachment: canvas.toBuffer(),
*      name: 'profile.png'
*    }
*   ]
*  });
* } 
******************************************************************************* */
