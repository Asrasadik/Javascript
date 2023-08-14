const startGameBtn = document.getElementById('start-game-btn');

/* const start = function startGame() {
	console.log('Game is starting...');
};

//anonymous function
const startGame = function () {
	console.log('Game is starting...');
}; */

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'Player_Win';
const RESULT_COMPUTER_WIN = 'Computer_Win';

let isGameRunning = false;

const getSelection = function () {
	let selection = prompt(`Select ${ROCK} ${PAPER} ${SCISSOR}`).toUpperCase();
	if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
		alert(`Invalid selection defalut selection is ${ROCK}`);
		return ROCK;
	} else {
		return selection;
	}
};

const getComputerChoice = function () {
	randomValue = Math.random();
	if (randomValue < 0.34) {
		return ROCK;
	} else if (randomValue < 0.67) {
		return PAPER;
	} else {
		return SCISSOR;
	}
};

const getWinner = function (cChoice, pChoice) {
	if (cChoice === pChoice) {
		return RESULT_DRAW;
	} else if (
		(cChoice === ROCK && pChoice === PAPER) ||
		(cChoice === PAPER && pChoice === SCISSOR) ||
		(cChoice === SCISSOR && pChoice === ROCK)
	) {
		return RESULT_PLAYER_WIN;
	} else {
		return RESULT_COMPUTER_WIN;
	}
};

startGameBtn.addEventListener('click', function () {
	if (isGameRunning) {
		return;
	}

	console.log('Game is starting...');
	isGameRunning = true;

	let playerSelection = getSelection();
	let computerChoice = getComputerChoice();
	const winner = getWinner(playerSelection, computerChoice);
	let message = `You picked ${playerSelection} and Computer picked ${computerChoice}, therefore `;

	if (winner === RESULT_DRAW) {
		message += 'you had a draw';
	} else if (winner === RESULT_COMPUTER_WIN) {
		message += 'you loose';
	} else {
		message += 'you win';
	}
});
