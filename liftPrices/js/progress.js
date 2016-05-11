var currentFloor = 1;
var targetFloor;

var scoreText;

function setTargetFloor(nb) {
	targetFloor = nb;
}
function addFloor() {
	currentFloor += 1;
}

function displayFloor(bool) {
	if (bool) {
		if (scoreText != null)
			scoreText.text = currentFloor + " / " + targetFloor;
		else {
			scoreText = game.add.text(650, 100, currentFloor + " / " + targetFloor, { font: "100px Arial", fill: "#00D700" });
			scoreText.x = game.width / 2 - scoreText.width / 2;
		}
	} else {
		scoreText.destroy();
		scoreText = null;
	}
}