/** **************************************
 *
 *   Economy: Plugin for PokeBot that enables economy features.
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
