const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noButton');
function onClickyes() {
	window.location.href = './yes.html';
}

function moveButton() {
	var x =
		Math.random() *
		(window.innerWidth - document.getElementById('noButton').offsetWidth);
	var y =
		Math.random() *
		(window.innerHeight - document.getElementById('noButton').offsetHeight);
	document.getElementById('noButton').style.left = `${x}px`;
	document.getElementById('noButton').style.top = `${y}px`;
}

yesBtn.addEventListener('click', onClickyes);
noBtn.addEventListener('click', moveButton);
noBtn.addEventListener('mouseover', moveButton);
