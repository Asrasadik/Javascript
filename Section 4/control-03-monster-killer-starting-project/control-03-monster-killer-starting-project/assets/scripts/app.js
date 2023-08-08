const PLAYER_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

const PLAYER_ATTACK = 'PLAYER_ATTACK';
const PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';

const LOG_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_GAME_OVER = 'GAME_OVER';
const LOG_BONUS = 'Bonus Life';

const enteredValue = parseInt(
	prompt('Maximum life for you and the monster.', '100')
);

if (isNaN(enteredValue) || enteredValue <= 0) {
	chosenMaxLife = 100;
}

let chosenMaxLife = enteredValue;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battelLog = [];

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
	let logEntry = {
		event: event,
		value: value,
		finalMonsterHealth: monsterHealth,
		finalPlayerHealth: playerHealth,
	};

	if (event === LOG_PLAYER_ATTACK) {
		logEntry.target = 'monster';
	} else if (event === LOG_MONSTER_ATTACK) {
		logEntry.target = 'player';
	} else if (event === LOG_PLAYER_STRONG_ATTACK) {
		logEntry.target = 'monster';
	} else if (event === LOG_BONUS) {
		logEntry.target = 'player';
	} else if (event === LOG_GAME_OVER) {
	}
	battelLog.push(logEntry);
}

function reset() {
	currentMonsterHealth = chosenMaxLife;
	currentPlayerHealth = chosenMaxLife;
	resetGame(chosenMaxLife);
}

function endRound() {
	const intitialPlayerHealth = currentPlayerHealth;
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	currentPlayerHealth -= playerDamage;
	writeToLog(
		LOG_MONSTER_ATTACK,
		playerDamage,
		currentMonsterHealth,
		currentPlayerHealth
	);

	if (currentPlayerHealth <= 0 && hasBonusLife) {
		hasBonusLife = false;
		removeBonusLife();
		currentPlayerHealth = intitialPlayerHealth;
		setPlayerHealth(currentPlayerHealth);
		alert('You could have lost but bonus life saved you!');
		writeToLog(
			LOG_BONUS,
			'Player Heal',
			currentMonsterHealth,
			currentPlayerHealth
		);
	}
	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		alert('You won');
		reset();
		writeToLog(
			LOG_GAME_OVER,
			'Player Won',
			currentMonsterHealth,
			currentPlayerHealth
		);
	} else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
		alert('You lost');
		reset();
		writeToLog(
			LOG_GAME_OVER,
			'Player Lost',
			currentMonsterHealth,
			currentPlayerHealth
		);
	} else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
		alert('Its a draw');
		reset();
		writeToLog(
			LOG_GAME_OVER,
			'Draw',
			currentMonsterHealth,
			currentPlayerHealth
		);
	}
}

function attackMonster(attackValue, attackMode) {
	const damage = dealMonsterDamage(attackValue);
	currentMonsterHealth -= damage;
	let attackType;
	/* if (attackMode === PLAYER_ATTACK) {
		writeToLog(
			LOG_PLAYER_ATTACK,
			damage,
			currentMonsterHealth,
			currentPlayerHealth
		);
	} else if (attackMode === PLAYER_STRONG_ATTACK) {
		writeToLog(
			LOG_PLAYER_STRONG_ATTACK,
			damage,
			currentMonsterHealth,
			currentPlayerHealth
		);
	} */
	attackType =
		attackMode === PLAYER_ATTACK ? LOG_PLAYER_ATTACK : LOG_PLAYER_STRONG_ATTACK;
	writeToLog(attackMode, damage, currentMonsterHealth, currentPlayerHealth);
	endRound();
}

function attackHandler() {
	attackMonster(PLAYER_ATTACK_VALUE, PLAYER_ATTACK);
}

function strongAttackHandler() {
	attackMonster(STRONG_ATTACK_VALUE, PLAYER_STRONG_ATTACK);
}

function healPlayerHandler() {
	let healValue;
	if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
		alert("you can't heal greater than maximum life");
		healValue = chosenMaxLife - currentPlayerHealth;
	} else {
		healValue = HEAL_VALUE;
	}
	increasePlayerHealth(HEAL_VALUE);
	currentPlayerHealth += HEAL_VALUE;
	endRound();
	writeToLog(
		LOG_PLAYER_HEAL,
		healValue,
		currentMonsterHealth,
		currentPlayerHealth
	);
}

function printTheLog() {
	console.log(battelLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printTheLog);
