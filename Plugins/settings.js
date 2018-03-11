/** **************************************
 *
 *   Settings: Plugin for PokeBot that enables settings features.
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

const db = require('quick.db');
exports.getInt = async (key, guildID) => {
  const value = await db.fetch(`settings_${guildID}_${key}`);
  if (value) {
    return value;
  }
  else {
    await db.set(`settings_${guildID}_${key}`, 0);
    return await db.fetch(`settings_${guildID}_${key}`);
  }
};

exports.getStr = async (key, guildID) => {
  const value = await db.fetch(`settings_${guildID}_${key}`);
  if (value) {
    return value;
  }
  else {
    await db.set(`settings_${guildID}_${key}`, '');
    return await db.fetch(`settings_${guildID}_${key}`);
  }
};

exports.getBool = async (key, guildID) => {
  const value = await db.fetch(`settings_${guildID}_${key}`);
  if (value) {
    return value;
  }
  else {
    await db.set(`settings_${guildID}_${key}`, false);
    return await db.fetch(`settings_${guildID}_${key}`);
  }
};

exports.setInt = async (key, value, guildID) => {
  await db.set(`settings_${guildID}_${key}`, parseInt(value));
};

exports.setStr = async (key, value, guildID) => {
  await db.set(`settings_${guildID}_${key}`, value);
};

exports.setBool = async (key, value, guildID) => {
  await db.set(`settings_${guildID}_${key}`, (value == true));
};
