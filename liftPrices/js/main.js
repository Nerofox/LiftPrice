var game;


startGame(context);//A SUPPRIMER FRAMEWORK DOLMEN LE LANCERA

function startGame(param) {
	game = new Phaser.Game(1536, 2048, Phaser.AUTO, "AscenseurDuPrix", { preload: preload, create: create, update: update });;
	
}

//CHARGEMENT DES FICHIERS DU JEUX
function preload() {
	//------------IMAGE DE BASE DE LASCENSEUR--------------
	game.load.image("outSide", "param/img/lift/outSide.png");
	game.load.image("inSide", "param/img/lift/inSide.png");
	game.load.image("leftDoor", "param/img/lift/leftDoor.png");
	game.load.image("rightDoor", "param/img/lift/rightDoor.png");
    //effectuer une boucle sur l'objet products du fichier products.js pour charger les éléments
    
    for(i=0; i<products.length; i++){
        game.load.image(products[i].name, products[i].img);
    }
 
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