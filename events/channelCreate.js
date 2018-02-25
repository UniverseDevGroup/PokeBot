module.exports = (bot, channel) => {
  if (channel.name.startsWith('gym-')) {
    channel.setTopic('Current Owner: *none*');
  }
};
