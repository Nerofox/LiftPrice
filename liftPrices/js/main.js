var game;

startGame();//A SUPPRIMER FRAMEWORK DOLMEN LE LANCERA

function startGame() {
	game = new Phaser.Game(1536, 2048, Phaser.AUTO, "AscenseurDuPrix", { preload: preload, create: create, update: update });;
}

//CHARGEMENT DES FICHIERS DU JEUX
function preload() {
	//------------IMAGE DE BASE DE LASCENSEUR--------------
	game.load.image("outSide", "param/img/lift/outSide.png");
	game.load.image("inSide", "param/img/lift/inSide.png");
	game.load.image("leftDoor", "param/img/lift/leftDoor.png");
	game.load.image("rightDoor", "param/img/lift/rightDoor.png");
	//------------IMAGE DE BASE DES BOUTONS--------------
	game.load.atlas("buttonMore", "param/img/lift/buttonMore.png", "js/spriteConf/button.json");
	game.load.atlas("buttonLess", "param/img/lift/buttonLess.png", "js/spriteConf/button.json");
}

//LANCEMENT DE LA CREATION DU JEU
function create() {
	createGame();
}

function update() {
	updateLift();
}