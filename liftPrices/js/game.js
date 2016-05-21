var winOrLoose;

/**
 * Fonction de lancement de la création du jeu
 */
function createGame() {
	//game.input.onTap.add(test);
	//PLACEMENT DE LASCENSEUR ET PARAMETRAGE
	var paramLift = [314,443,314,443,743,443,0,0,1387,850,1387,1000];
	setTargetFloor(5);

	//LANCEMENT
	var productChoose = randomProduct();
	displayProduct(productChoose);
	createLift(paramLift);	
	doorLift(true);
	displayFloor(true);
	setEventClickButtonLess(onClickLess);
	setEventClickButtonMore(onClickMore);
}

/*
 * Manipule le jeu proclame la fin de partie
 */
function resolveGame(moreOrLess) {
	winOrLoose = checkPrice(moreOrLess);
	//si réussi
	if (winOrLoose) {
		//TODO faire win message
		addFloor();
	} else { //si échoue
		//TODO faire défaite message
	}
	doorLift(false, finishDoor);
}



/*
 * Choisi un produit au hasard et l'affiche
 */
function selectProduct() {
	var productChoose = randomProduct();
	displayProduct(productChoose);
}

/*
 * Declenché quand le bouton moins est cliqué
 */
function onClickLess() {
    resolveGame(false);
}

/*
 * Declenché quand le bouton plus est cliqué
 */
function onClickMore() {
    resolveGame(true);
}

//Appellée une fois l'animation des portes effectuées
function finishDoor() {
	selectProduct();
	if (winOrLoose) {
		displayFloor(false);
		upFloor(finishUpFloor);
	} else {
		doorLift(true);
	}
}

//Appellée une fois l'animation de l'étage effectuée
function finishUpFloor() {
	//si on a atteint le dernié étage
	if (checkFloor()) {
		//TODO bravo c'est gagné
	}
	doorLift(true);
	displayFloor(true);
}