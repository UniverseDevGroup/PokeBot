/** **************************************
 *
 *   Economy: Plugin for PokeBot that enables economy features.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

const db = require('quick.db');
exports.get = async (userid) => {
  const amount = await db.fetch(`money_${userid}`);
  if (amount) {
    return amount;
  }
  else {
    await db.set(`money_${userid}`, 0);
    return await db.fetch(`money_${userid}`);
  }
};

exports.add = async (userid, money) => {
  const amount = await db.fetch(`money_${userid}`);
  if (amount) {
    await db.set(`money_${userid}`, amount + money);
  }
  else {
    await db.set(`money_${userid}`, money);
  }
};

exports.subtract = async (userid, money) => {
  const amount = await db.fetch(`money_${userid}`);
  if (amount) {
    await db.set(`money_${userid}`, amount - money);
  }
  else {
    await db.set(`money_${userid}`, 0 - money);
  }
};
