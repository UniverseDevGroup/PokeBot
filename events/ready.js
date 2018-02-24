function setGame(bot) {
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
}
module.exports = (bot) => {
  console.log('PokeBot has finished loading.');
  setGame(bot);
  bot.setInterval(setGame(bot), 200000);
};
