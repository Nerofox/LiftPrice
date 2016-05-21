
/**
 * Fonction de lancement de la création du jeu
 */
function createGame() {
	//game.input.onTap.add(test);
	//PLACEMENT DE LASCENSEUR
	var paramLift = [314,443,314,443,743,443,0,0,1387,850,1387,1000];
	createLift(paramLift);	

	setTargetFloor(5);

	doorLift(true);
	displayFloor(true);

	//MISE EN PLACE DES EVENEMENTS DES BOUTONS
	setEventClickButtonLess(onClickLess);
	setEventClickButtonMore(onClickMore);
	
	var productChoose = randomProduct();
	displayProduct(productChoose);
    
}

/*
 * Declenché quand le bouton moins est cliqué
 */
function onClickLess() {
	alert("less");
    checkPrice(false);
    
}

/*
 * Declenché quand le bouton plus est cliqué
 */
function onClickMore() {
	alert("more");
    checkPrice(true);
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