/** **************************************
 *
 *   Whittelist: Plugin for PokeBot that let's the owners whitelist servers.
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
  }
  else {
    await db.set(`whitelist_${guildID}`, false);
    return await db.fetch(`whitelist_${guildID}`);
  }
};
