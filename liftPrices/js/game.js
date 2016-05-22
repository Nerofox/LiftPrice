var winOrLoose;

/**
 * Fonction de lancement de la création du jeu
 */
function createGame() {
	//game.input.onTap.add(test);
	//PLACEMENT DE LASCENSEUR ET PARAMETRAGE
	var paramLift = [314,443,314,443,743,443,0,0,1387,850,1387,1000];
	setTargetFloor(paramGame.floor);

	//LANCEMENT
	var productChoose = randomProduct();
	displayProduct(productChoose);
	createLift(paramLift);	
	doorLift(true);
	displayFloor(true);
}


/*
 * Manipule le jeu proclame la fin de partie
 */
function resolveGame(moreOrLess) {
	winOrLoose = checkPrice(moreOrLess);
	//si réussi
	if (winOrLoose) {
		addFloor();
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
	//on vérifie si on a gagné
	if (checkWin()) {
		displayWinGame(true);
		return;
	}	
	//sinon on continue
	selectProduct();
	if (winOrLoose) {
		displayWin(true);
		setTimeout(function() {
			displayFloor(false);
			displayWin(false);
			upFloor(finishUpFloor);
		}, 2000);
	} else {
		displayLoose(true);
		setTimeout(function() {
			displayLoose(false);
			doorLift(true);
		}, 2000);
	}
}

//Appellée une fois l'animation de l'étage effectuée
function finishUpFloor() {
	//si on a atteint le dernié étage
	doorLift(true);
	displayFloor(true);
}