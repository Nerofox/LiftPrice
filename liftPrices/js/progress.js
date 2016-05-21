var currentFloor = 1;
var targetFloor;

var scoreText;

/*
 * Met en place le nombre d'étage max a parcourir
 */
function setTargetFloor(nb) {
	targetFloor = nb;
}

/*
 * Ajoute un étage parcouru au score
 */
function addFloor() {
	currentFloor += 1;
}

/*
 * Vérifie si dernié étage atteint
 */
function checkFloor() {
	if (currentFloor == targetFloor)
		return true;
	else
		return false;
} 


/*
 * Active/Desactive l'affichage du score d'étage
 * @param bool : 
 */
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