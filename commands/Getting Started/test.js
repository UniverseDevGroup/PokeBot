/** **************************************
 *
 *   Test: Plugin for PokeBot that helps us test new features
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
  const Canvas = require('canvas');
  const request = require('request-promise');
  Canvas.registerFont('./assets/Ketchum.otf', {
    family: 'Ketchum'
  });
  const canvas = Canvas.createCanvas(1500, 500);
  const ctx = canvas.getContext('2d');
  const Image = Canvas.Image;
  const base = new Image();
  const avatar = new Image();
  const fs = require('fs');

  avatar.src = await request({
    uri: msg.author.avatarURL,
    encoding: null
  });
  base.src = await fs.readFileSync('./assets/Pokemon_Welcome_Template.png');
  ctx.drawImage(base, 0, 0, 1500, 500);

  ctx.font = '100px Ketchum';
  ctx.fillStyle = '#e5da2a';
  ctx.strokeStyle = '#3b4cca';
  ctx.lineWidth = 5;
  ctx.fillText(msg.author.tag, 475, 175);
  ctx.strokeText(msg.author.tag, 475, 175);

  ctx.font = '55px Ketchum';
  ctx.fillStyle = '#fff';
  ctx.fillText(msg.guild.name, 800, 325);

  ctx.font = '40px Ketchum';
  ctx.fillStyle = '#fff';
  ctx.fillText(msg.guild.memberCount + ' members', 100, 70);

  ctx.globalAlpha = 1;
  ctx.beginPath();
  ctx.arc(208, 267, 166, 0, 2 * Math.PI, true);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(avatar, 43, 101, 329, 331);
  return msg.channel.send({
    files: [{
      attachment: canvas.toBuffer(),
      name: 'welcomeCard.png'
    }
    ]
  });
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'test',
  description: 'Introduces you to the PokeWorld server!',
};
