
function createGame() {
	game.input.onTap.add(test);

	var paramLift = [314,443,314,443,743,443,0,0,1387,850,1387,1000];
	createLift(paramLift);

	setTargetFloor(5);

	doorLift(true);
	displayFloor(true);
}

//fonction appellée à chaque frame du jeu (environ 30 fois par secondes) ici on detecte les évènements utilisateur
//(clic de souris par exemple)
function update() {
	
}

//UTILISER A FIN DE TEST A SUPPRIMER
var testParam = true;
function test() {
	displayFloor(false);
	doorLift(false, finishDoor);
}

//Appellée une fois l'animation des portes effectuées
function finishDoor() {
	upFloor(finishUpFloor);
}

//Appellée une fois l'animation de l'étage effectuée
function finishUpFloor() {
	doorLift(true);
	displayFloor(true);
}