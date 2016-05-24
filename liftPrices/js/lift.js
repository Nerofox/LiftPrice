var outSide; var tempOutSide;
var inSide; var tempInSide;
var leftDoor; var tempLeftDoor;
var rightDoor; var tempRightDoor;
var buttonMore; var tempButtonMore;
var buttonLess; var tempButtonLess;

var limitXLeft = 314;
var limitXRight = 743;
var speedUpFloor = 1000;
var speedUpDoor = 180;

var lastParam; //0 - fermeture, 1 - ouverture, 2 - changement étage
var finishFunction; //fonction a apppeler a l'extérieur

/**
 * Creation des elements de l'ascenseur
 * @param paramXY : Tableau des coordonnées des éléments
 */
function createLift(paramXY) {
	//lift
	inSide = game.add.sprite(paramXY[0],paramXY[1],"inSide");
	game.physics.enable(inSide, Phaser.Physics.ARCADE);
	leftDoor = game.add.sprite(paramXY[2],paramXY[3],"leftDoor");
	game.physics.enable(leftDoor, Phaser.Physics.ARCADE);
	rightDoor = game.add.sprite(paramXY[4],paramXY[5],"rightDoor");
	game.physics.enable(rightDoor, Phaser.Physics.ARCADE);
	outSide = game.add.sprite(paramXY[6],paramXY[7], "outSide");
	game.physics.enable(outSide, Phaser.Physics.ARCADE);
	//button
	buttonMore = game.add.sprite(paramXY[8], paramXY[9], "buttonMore");
	game.physics.enable(buttonMore, Phaser.Physics.ARCADE);
	buttonLess = game.add.sprite(paramXY[10], paramXY[11], "buttonLess");
	game.physics.enable(buttonLess, Phaser.Physics.ARCADE);
	buttonMore.animations.add("buttonMoreAnim", [0,1,2,1,0]);
	buttonMore.animations.play("buttonMoreAnim",5,true);
	buttonLess.animations.add("buttonLessAnim", [0,1,2,1,0]);
	buttonLess.animations.play("buttonLessAnim",5,true);
	buttonLess.inputEnabled = true;
	buttonMore.inputEnabled = true;
	//placement des plans pour que les produits soient dérrière les portes
	bringProductToTop();
	game.world.bringToTop(leftDoor);
	game.world.bringToTop(rightDoor);
	game.world.bringToTop(outSide);
	game.world.bringToTop(buttonMore);
	game.world.bringToTop(buttonLess);
}

/**
 * Met en place l'évènement click sur le bouton moins
 * @param listener : Fonction appellée pour l'évènement
 */
function setEventClickButtonLess(listener) {
	buttonLess.events.onInputDown.add(listener);
}

/**
 * Met en place l'évènement click sur le bouton plus
 * @param listener : Fonction appellée pour l'évènement
 */
function setEventClickButtonMore(listener) {
	buttonMore.events.onInputDown.add(listener);
}

/**
 * Supprime les évènements des boutons
 */
function removeEventClickButton() {
	buttonMore.events.onInputDown.removeAll();
	buttonLess.events.onInputDown.removeAll();
}

function updateLift() {
	//gestion d'arrêt des mouvements des portes
	if (lastParam == 1) {
		if (rightDoor.body.x >= limitXRight)
			rightDoor.body.velocity.x = 0;
		if (leftDoor.body.x <= limitXLeft)
			leftDoor.body.velocity.x = 0;
		//appel fonction si demandée
		if (rightDoor.body.x >= limitXRight && leftDoor.body.x <= limitXLeft && finishFunction != null) {
			finishFunction();
			finishFunction = null;
		}
	} else if (lastParam === 0) {
		if (rightDoor.body.x <= limitXRight)
			rightDoor.body.velocity.x = 0;
		if (leftDoor.body.x >= limitXLeft)
			leftDoor.body.velocity.x = 0;
		//appel fonction si demandée
		if (rightDoor.body.x <= limitXRight && leftDoor.body.x >= limitXLeft && finishFunction != null) {
			finishFunction();
			finishFunction = null;
		}
	//gestion d'arrêt d'étage arrêt de l'ascenseur une fois atteint la valeur la plus haute
	} else if (lastParam == 2) { 
		if (outSide.body.y >= 0) {
			//arrêt des éléments
			outSide.body.velocity.y = 0;
			inSide.body.velocity.y = 0;
			leftDoor.body.velocity.y = 0;
			rightDoor.body.velocity.y = 0;
			buttonMore.body.velocity.y = 0;
			buttonLess.body.velocity.y = 0;
			//destruction des anciens éléments
			tempOutSide.destroy();
			tempInSide.destroy();
			tempLeftDoor.destroy();
			tempRightDoor.destroy();
			tempButtonLess.destroy();
			tempButtonMore.destroy();
			lastParam = null;
			//sortie
			if (finishFunction != null) {
				finishFunction();
				finishFunction = null;
			}
		}
	}
}

/**
 * Effectue l'animation du changement d'étage
 */
function upFloor(functionCall = null) {
	//sauvegarde de la fonctiona lancer une fois l'opération effectuée
	finishFunction = functionCall;
	//sauvegarde des éléments actuels
	tempOutSide = outSide;
	tempInSide = inSide;
	tempLeftDoor = leftDoor;
	tempRightDoor = rightDoor;
	tempButtonLess = buttonLess;
	tempButtonMore = buttonMore;
	//recréation
	var paramLift = [314,-1608,314,-1608,743,-1608,0,-2050,1387,-1200,1387,-1050];
	createLift(paramLift);
	//deplacement des éléments vers le haut
	tempOutSide.body.velocity.y = speedUpFloor;
	tempInSide.body.velocity.y = speedUpFloor;
	tempLeftDoor.body.velocity.y = speedUpFloor;
	tempRightDoor.body.velocity.y = speedUpFloor;
	tempButtonMore.body.velocity.y = speedUpFloor;
	tempButtonLess.body.velocity.y = speedUpFloor;
	game.world.bringToTop(tempLeftDoor);
	game.world.bringToTop(tempRightDoor);
	game.world.bringToTop(tempOutSide);
	game.world.bringToTop(tempButtonMore);
	game.world.bringToTop(tempButtonLess);
	outSide.body.velocity.y = speedUpFloor;
	inSide.body.velocity.y = speedUpFloor;
	leftDoor.body.velocity.y = speedUpFloor;
	rightDoor.body.velocity.y = speedUpFloor;
	buttonLess.body.velocity.y = speedUpFloor;
	buttonMore.body.velocity.y = speedUpFloor;
	lastParam = 2;
}

/**
 * Declenche animation ouvre et ferme la porte
 * @param Boolean openOrClose
 */
function doorLift(openOrClose, functionCall = null) {
	//sauvegarde de la fonctiona lancer une fois l'opération effectuée
	finishFunction = functionCall;
	if (openOrClose == true) {
		//MISE EN PLACE DES EVENEMENTS DES BOUTONS
		setEventClickButtonLess(onClickLess);
		setEventClickButtonMore(onClickMore);
		lastParam = 1;
		//porte droite
		rightDoor.body.velocity.x = speedUpDoor;
		limitXRight = 1162;
		//porte gauche
		leftDoor.body.velocity.x = 0-speedUpDoor;
		limitXLeft = -100;
	} else {
		removeEventClickButton();
		lastParam = 0;
		//porte droite
		rightDoor.body.velocity.x = 0-speedUpDoor;
		limitXRight = 743
		//porte gauche
		leftDoor.body.velocity.x = speedUpDoor;
		limitXLeft = 314;
	}
}