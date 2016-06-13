var winOrLoose;

/**
 * Fonction de lancement de la création du jeu
 */
function createGame() {
	//game.input.onTap.add(test);
	//PLACEMENT DE LASCENSEUR ET PARAMETRAGE
	var paramLift = [314,443,314,443,743,443,0,0,1387,850,1387,1000];
	setTargetFloor(paramGame.floor);
	setLife(paramGame.life);

	//LANCEMENT
	var productChoose = randomProduct();
	displayProduct(productChoose);
	createLift(paramLift);
	songLiftOpen.play();
	setTimeout(function() {
		doorLift(true, null);
		displayFloor(true);
		displayLife(true);
	}, 1000);
}

/*
 * Manipule le jeu proclame la fin de partie
 */
function resolveGame(moreOrLess) {
	winOrLoose = checkPrice(moreOrLess);
	//si réussi
	if (winOrLoose) {
		addFloor();
	} else { //si perdu
		removeLife();
	}
	songLiftClose.play();
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

/*
 * Déclenché si bouton terminé perdu cliqué 
 */
 function onClickWinGame() {
 	iDol.output('module_output_event', outputWin);
 }

 /*
 * Déclenché si bouton terminé gagné cliqué 
 */
 function onClickLooseGame() {
 	iDol.output('module_output_event', outputLoose);
 }

//Appellée une fois l'animation des portes effectuées
function finishDoor() {
	displayLife(false);
	displayLife(true);

	//on vérifie si on a gagné la partie
	if (checkWin()) {
		displayWinGame(true);
		setActionFinish(onClickWinGame);
		songAmbiance.stop();
		songGameWin.play();
		return;
	} //ou si perdu la partie
	else if (checkLoose()) {
		displayLooseGame(true);
		setActionFinish(onClickLooseGame);
		songAmbiance.stop();
		songGameLoose.play();
		return;
	}

	//sinon on continue
	selectProduct();
	if (winOrLoose) {
		songWin.play();
		displayWin(true);
		setTimeout(function() {
			songLiftUpside.play();
			displayFloor(false);
			displayLife(false);
			displayWin(false);
			upFloor(finishUpFloor);
		}, 2000);
	} else {
		songLoose.play();
		displayLoose(true);
		setTimeout(function() {
			displayLoose(false);
			songLiftOpen.play();
			setTimeout(function() {
				doorLift(true, null);
			}, 1000);
		}, 2000);
	}
}

//Appellée une fois l'animation de l'étage effectuée
function finishUpFloor() {
	//si on a atteint le dernié étage
	displayFloor(true);
	displayLife(true);
	songLiftOpen.play();
	setTimeout(function() {
		doorLift(true, null);
	},1000);	
}