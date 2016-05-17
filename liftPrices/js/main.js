var game;

var context = {
      "coca": {
         "img": "param/img/product/coca.png",
          "realPrice": 0.65,
          "wrongPrice": 1
        },
      
        "tagada": {
            "img": "param/img/product/fraise.png",
            "realPrice": 1.50,
            "wrongPrice": 2
        },
      
         "lait": {
             "img": "param/img/product/lait.png",
             "realPrice": 1.10,
             "wrongPrice": 0.85
        },
        
         "pain": {
             "img": "param/img/product/pain.png",
             "realPrice": 0.85,
             "wrongPrice": 0.50
        },
    };

startGame(context);//A SUPPRIMER FRAMEWORK DOLMEN LE LANCERA

function startGame(param) {
	game = new Phaser.Game(1536, 2048, Phaser.AUTO, "AscenseurDuPrix", { preload: preload, create: create, update: update });;
	setProducts(param);
}

//CHARGEMENT DES FICHIERS DU JEUX
function preload() {
	//------------IMAGE DE BASE DE LASCENSEUR--------------
	game.load.image("outSide", "param/img/lift/outSide.png");
	game.load.image("inSide", "param/img/lift/inSide.png");
	game.load.image("leftDoor", "param/img/lift/leftDoor.png");
	game.load.image("rightDoor", "param/img/lift/rightDoor.png");
    //effectuer une boucle sur l'objet products du fichier products.js pour charger les éléments
    //game.load.image("displayProduct1","param/img/product/coca.png");
    //game.load.image("displayProduct2","param/img/product/fraise.png");
    //game.load.image("displayProduct3","param/img/product/lait.png");
    //game.load.image("displayProduct4","param/img/product/pain.png"),
 
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