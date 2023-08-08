const PLAYER_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function endRound() {
	const intitialPlayerHealth = currentPlayerHealth;
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	currentPlayerHealth -= playerDamage;

	if (currentPlayerHealth <= 0 && hasBonusLife) {
		hasBonusLife = false;
		removeBonusLife();
		currentPlayerHealth = intitialPlayerHealth;
		setPlayerHealth(currentPlayerHealth);
		alert('You could have lost but bonus life saved you!');
	}
	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		alert('You won');
	} else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
		alert('You lost');
	} else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
		alert('Its a draw');
	}
}

function attackMonster(attackValue) {
	const damage = dealMonsterDamage(attackValue);
	currentMonsterHealth -= damage;
	endRound();
}

function attackHandler() {
	attackMonster(PLAYER_ATTACK_VALUE);
}

function strongAttackHandler() {
	attackMonster(STRONG_ATTACK_VALUE);
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
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
