//creation du jeu
var game;

startGame();//A SUPPRIMER FRAMEWORK DOLMEN LE LANCERA

function startGame() {
	game = new Phaser.Game(1536, 2048, Phaser.AUTO, "AscenseurDuPrix", { preload: preload, create: create, update: update });;
}

//ici les fichiers du jeu (image, son etc..) sont préchargés
function preload() {
	//------------IMAGE DE BASE DE LASCENSEUR--------------
	game.load.image("outSide", "param/img/lift/outSide.png");
	game.load.image("inSide", "param/img/lift/inSide.png");
	game.load.image("leftDoor", "param/img/lift/leftDoor.png");
	game.load.image("rightDoor", "param/img/lift/rightDoor.png");
	game.load.atlas("buttonMore", "param/img/lift/buttonMore.png", "js/spriteConf/button.json");
	game.load.atlas("buttonLess", "param/img/lift/buttonLess.png", "js/spriteConf/button.json");
}

//dans cette section on effectue la création des objets su jeu nommé sprite (bouton, produit)
function create() {
	var paramLift = [314,443,314,443,743,443,0,0,1387,850,1387,1000];
	createLift(paramLift);
	createGame();
}

function update() {
	updateLift();
}