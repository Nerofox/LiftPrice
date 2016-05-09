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
}

//dans cette section on effectue la création des objets su jeu nommé sprite (bouton, produit)
function create() {
	createLift();
	createGame();
}

function update() {
	updateLift();
}