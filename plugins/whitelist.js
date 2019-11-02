/** **************************************
 *
 *   Whittelist: Plugin for PokeBot that let's the owners whitelist servers.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

const db = require('quick.db');
exports.whitelist = async (guildID) => {
  await db.set(`whitelist_${guildID}`, true);
};

exports.unwhitelist = async (guildID) => {
  await db.set(`whitelist_${guildID}`, false);
};

exports.isWhitelist = async (guildID) => {
  const value = await db.fetch(`whitelist_${guildID}`);
  if (value) {
    return value;
  } else {
    await db.set(`whitelist_${guildID}`, false);
    return db.fetch(`whitelist_${guildID}`);
  }
};
