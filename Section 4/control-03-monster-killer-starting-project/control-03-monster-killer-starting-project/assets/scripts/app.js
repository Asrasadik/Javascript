const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
	const damage = dealMonsterDamage(ATTACK_VALUE);
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

attackBtn.addEventListener('click', attackHandler);