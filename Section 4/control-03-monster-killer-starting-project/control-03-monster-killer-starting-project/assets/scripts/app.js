const PLAYER_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 20;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(attackValue) {
	const damage = dealMonsterDamage(attackValue);
	currentMonsterHealth -= damage;
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	currentPlayerHealth -= playerDamage;
	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		alert('You won');
	} else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
		alert('You lost');
	} else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
		alert('Its a draw');
	}
}

function attackHandler() {
	attackMonster(PLAYER_ATTACK_VALUE);
}

function strongAttackHandler() {
	attackMonster(STRONG_ATTACK_VALUE);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
