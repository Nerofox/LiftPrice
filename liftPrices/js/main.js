//creation du jeu
var game;

startGame();

function startGame() {
	game = new Phaser.Game(1536, 2048, Phaser.AUTO, "AscenseurDuPrix", { preload: preload, create: create, update: update });;
}

//ici les fichiers du jeu (image, son etc..) sont préchargés
function preload() {
	game.load.image("outSide", "param/img/lift/outSide.png");
	game.load.image("inSide", "param/img/lift/inSide.png");
	game.load.image("leftDoor", "param/img/lift/leftDoor.png");
	game.load.image("rightDoor", "param/img/lift/rightDoor.png");
}

//dans cette section on effectue la création des objets su jeu nommé sprite (bouton, produit)
function create() {
	game.input.onTap.add(test);

	createLift();
	//game.add.sprite(0,0, "chat");//creation du sprite en se basant sur le nom chargé ci dessus "chat" avec coordonnées de placement x = 0, y = 0
}

function update() {
	updateLift();
	updateGame();
}


var testParam = true;
function test() {
	doorLift(testParam);
	if (testParam) {
		testParam = false;
	} else {
		testParam = true;
	}
}