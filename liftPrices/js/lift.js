var outSide; var tempOutSide;
var inSide; var tempInSide;
var leftDoor; var tempLeftDoor;
var rightDoor; var tempRightDoor;
var buttonMore; var tempButtonMore;
var buttonLess; var buttonLess;

var limitXLeft = 314;
var limitXRight = 743;
var speedUpFloor = 1500;

var lastParam; //0 - fermeture, 1 - ouverture, 2 - changement étage
var finishFunction; //fonction a apppeler a l'extérieur

function createLift() {
	inSide = game.add.sprite(314,443,"inSide");
	game.physics.enable(inSide, Phaser.Physics.ARCADE);
	leftDoor = game.add.sprite(314,443,"leftDoor");
	game.physics.enable(leftDoor, Phaser.Physics.ARCADE);
	rightDoor = game.add.sprite(743,443,"rightDoor");
	game.physics.enable(rightDoor, Phaser.Physics.ARCADE);
	outSide = game.add.sprite(0,0, "outSide");
	game.physics.enable(outSide, Phaser.Physics.ARCADE);
	//button
	buttonMore = game.add.sprite(1387, 850, "buttonMore");
	game.physics.enable(buttonMore, Phaser.Physics.ARCADE);
	buttonLess = game.add.sprite(1387, 1000, "buttonLess");
	game.physics.enable(buttonLess, Phaser.Physics.ARCADE);
	buttonMore.animations.add("buttonMoreAnim", [0,1,2,1,0]);
	buttonMore.animations.play("buttonMoreAnim",5,true);
	buttonLess.animations.add("buttonLessAnim", [0,1,2,1,0]);
	buttonLess.animations.play("buttonLessAnim",5,true);
}

function updateLift() {
	//gestion d'arrêt des mouvements des portes
	if (lastParam == 1) {
		if (rightDoor.body.x >= limitXRight)
			rightDoor.body.velocity.x = 0;
		if (leftDoor.body.x <= limitXLeft)
			leftDoor.body.velocity.x = 0;
		//appel fonction si demandée
		if (rightDoor.body.x >= limitXRight && leftDoor.body.x <= limitXLeft && finishFunction != null)
			finishFunction();
	} else if (lastParam === 0) {
		if (rightDoor.body.x <= limitXRight)
			rightDoor.body.velocity.x = 0;
		if (leftDoor.body.x >= limitXLeft)
			leftDoor.body.velocity.x = 0;
		//appel fonction si demandée
		if (rightDoor.body.x <= limitXRight && leftDoor.body.x >= limitXLeft && finishFunction != null)
			finishFunction();
	} else if (lastParam == 2) { //arrêt de l'ascenseur une fois atteint la valeur la plus haute
		if (outSide.body.y >= 0) {
			//arrêt des éléments
			outSide.body.velocity.y = 0;
			inSide.body.velocity.y = 0;
			leftDoor.body.velocity.y = 0;
			rightDoor.body.velocity.y = 0;
			//destruction des anciens éléments
			tempOutSide.destroy();
			tempInSide.destroy();
			tempLeftDoor.destroy();
			tempRightDoor.destroy();
			lastParam = null;
			//sortie
			if (finishFunction != null)
				finishFunction();
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
	//recréation
	inSide = game.add.sprite(314,-1608,"inSide");
	game.physics.enable(inSide, Phaser.Physics.ARCADE);
	leftDoor = game.add.sprite(314,-1608,"leftDoor");
	game.physics.enable(leftDoor, Phaser.Physics.ARCADE);
	rightDoor = game.add.sprite(743,-1608,"rightDoor");
	game.physics.enable(rightDoor, Phaser.Physics.ARCADE);
	outSide = game.add.sprite(0,-2050, "outSide");
	game.physics.enable(outSide, Phaser.Physics.ARCADE);
	//deplacement des éléments vers le haut
	tempOutSide.body.velocity.y = speedUpFloor;
	tempInSide.body.velocity.y = speedUpFloor;
	tempLeftDoor.body.velocity.y = speedUpFloor;
	tempRightDoor.body.velocity.y = speedUpFloor;
	outSide.body.velocity.y = speedUpFloor;
	inSide.body.velocity.y = speedUpFloor;
	leftDoor.body.velocity.y = speedUpFloor;
	rightDoor.body.velocity.y = speedUpFloor;
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
		lastParam = 1;
		//porte droite
		rightDoor.body.velocity.x = 800;
		limitXRight = 1162;
		//porte gauche
		leftDoor.body.velocity.x = -800;
		limitXLeft = -100;
	} else {
		lastParam = 0;
		//porte droite
		rightDoor.body.velocity.x = -800;
		limitXRight = 743
		//porte gauche
		leftDoor.body.velocity.x = 800;
		limitXLeft = 314;
	}
}