var outSide;
var inSide;
var leftDoor;
var rightDoor;

var limitXLeft = 314;
var limitXRight = 743;

var lastParam;

function createLift() {
	inSide = game.add.sprite(314,443,"inSide");
	leftDoor = game.add.sprite(314,443,"leftDoor");
	rightDoor = game.add.sprite(743,443,"rightDoor");
	outSide = game.add.sprite(0,0, "outSide");

	game.physics.enable(leftDoor, Phaser.Physics.ARCADE);
	game.physics.enable(rightDoor, Phaser.Physics.ARCADE);
}

/**
 * Animation ouvre et ferme la porte
 * @param Boolean openOrClose
 */
function doorLift(openOrClose) {
	lastParam = openOrClose;

	if (openOrClose == true) {
		//porte droite
		rightDoor.body.velocity.x = 800;
		limitXRight = 1162;
		//porte gauche
		leftDoor.body.velocity.x = -800;
		limitXLeft = -100;
	} else {
		//porte droite
		rightDoor.body.velocity.x = -800;
		limitXRight = 743
		//porte gauche
		leftDoor.body.velocity.x = 800;
		limitXLeft = 314;
	}
}

function updateLift() {
	//gestion d'arrêt des mouvements des portes
	if (lastParam == true) {
		if (rightDoor.body.x >= limitXRight)
			rightDoor.body.velocity.x = 0;
		if (leftDoor.body.x <= limitXLeft)
			leftDoor.body.velocity.x = 0;
	} else {
		if (rightDoor.body.x <= limitXRight)
			rightDoor.body.velocity.x = 0;
		if (leftDoor.body.x >= limitXLeft)
			leftDoor.body.velocity.x = 0;
	}
	
}