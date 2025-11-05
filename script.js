let state = {
    totals: [0, 0],
    rounds: [0, 0],
    active: 0,
    finished: false
  };
  
  document.addEventListener('DOMContentLoaded', () => {
  const targetInput = document.getElementById('target');
  const highscoreList = document.getElementById('highscore-list');

  function init() {
    document.getElementById('roll-0').addEventListener('click', () => kasta(0));
    document.getElementById('roll-1').addEventListener('click', () => kasta(1));
    document.getElementById('hold-0').addEventListener('click', () => stanna(0));
    document.getElementById('hold-1').addEventListener('click', () => stanna(1));
    document.getElementById('new-game').addEventListener('click', resetGame);

    resetGame();
    loadHighscores();
  }

  init();
});