const startGameBtn = document.getElementById('start-game-btn');

const start = function startGame() {
	console.log('Game is starting...');
};

//anonymous function
const startGame = function () {
	console.log('Game is starting...');
};

startGameBtn.addEventListener('click', startGame);
