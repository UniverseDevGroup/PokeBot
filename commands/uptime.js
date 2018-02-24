exports.run = (bot, msg, args) => {

    var uptime = parseInt(client.uptime);
    uptime = Math.floor(uptime / 1000);
    var uptimeMinutes = Math.floor(uptime / 60);
    var minutes = uptime % 60;
    var hours = 0;
    while (uptimeMinutes >= 60) {
        hours++;
        uptimeMinutes = uptimeMinutes - 60;
    }
    var uptimeSeconds = minutes % 60;
message.channel.send(":clock3: Pokebot has been up for " + hours + " hours, " + uptimeMinutes + " minutes, and " + uptimeSeconds + " seconds.")

  };
  
  exports.conf = {
    aliases: [],
    guildOnly: true,
  };
  
  exports.help = {
    name: 'uptime',
    description: 'uptime.',
    usage: 'uptime',
  };
  