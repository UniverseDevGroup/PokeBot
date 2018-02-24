module.exports = (bot) => {
  console.log('PokeBot has finished loading.');
  bot.setInterval(function() {
    const games = [
      'Pokemon',
      'Catching things',
      'Finding pokemon',
      'Type p:help for help',
      'Fighting AstralMod',
    ];

    bot.user.setPresence({
      status: 'online',
      afk: false,
      game: {
        type: 0,
        name: games[Math.floor(Math.random() * games.length)],
      },
    });
  }, 200000);
};
