
function createGame() {
	game.input.onTap.add(test);
	doorLift(true);
}

//fonction appellée à chaque frame du jeu (environ 30 fois par secondes) ici on detecte les évènements utilisateur
//(clic de souris par exemple)
function update() {
	
}

//UTILISER A FIN DE TEST A SUPPRIMER
var testParam = true;
function test() {
	doorLift(false, finishDoor);
}

//Appellée une fois l'animation des portes effectuées
function finishDoor() {
	upFloor(finishUpFloor);
}

//Appellée une fois l'animation de l'étage effectuée
function finishUpFloor() {
	doorLift(true);
}