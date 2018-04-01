/** **************************************
 *
 *   Settings: Plugin for PokeBot that enables settings features.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
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
