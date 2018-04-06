/** **************************************
 *
 *   ChannelCreate: Plugin for PokeBot that setups gyms when they are created.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

module.exports = (bot, channel) => {
  if (channel.name.startsWith('gym-')) {
    channel.setTopic('Current Owner: *none*');
  }
};
