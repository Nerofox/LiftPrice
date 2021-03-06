var game;
var paramGame;

//sons
var songLiftOpen;
var songLiftClose;
var songLiftUpside;
var songGameWin; var songGameLoose;
var songWin; var songLoose;
var songAmbiance;

//startGame(context);//A COMMENTER FRAMEWORK DOLMEN LE LANCERA

function startGame(param) {
	paramGame = param;
	//CHARGEMENT DES PRODUITS PUIS LANCEMENT DU JEUX
	$.getJSON( "param/products.json", function( data ) {
		products = data;
		game = new Phaser.Game(1536, 2048, Phaser.CANVAS, "AscenseurDuPrix", { preload: preload, create: create, update: update });
	});
}

//CHARGEMENT DES FICHIERS DU JEUX
function preload() {
	//------------IMAGE DE BASE DE LASCENSEUR--------------
	game.load.image("outSide", "param/img/lift/outSide.png");
	game.load.image("inSide", "param/img/lift/inSide.png");
	game.load.image("leftDoor", "param/img/lift/leftDoor.png");
	game.load.image("rightDoor", "param/img/lift/rightDoor.png");
    //------------IMAGE DES PRODUITS SAUVEGARDES-------------
    for(i = 0; i < products.length; i++){
        game.load.image(products[i].name, products[i].img);
    }
	//------------IMAGE DE BASE DES BOUTONS--------------
	game.load.atlas("buttonMore", "param/img/lift/buttonMore.png", "js/spriteConf/button.json");
	game.load.atlas("buttonLess", "param/img/lift/buttonLess.png", "js/spriteConf/button.json");
	game.load.image("finish", "param/img/lift/finish.png");
    game.load.image("finishLoose", "param/img/lift/finishLoose.png");
	//------------SON DU JEU------------------------------
	game.load.audio("liftOpen", "param/song/lift_open.ogg");
	game.load.audio("liftClose", "param/song/lift_close.ogg");
	game.load.audio("liftUp", "param/song/lift_upside.ogg");
	game.load.audio("gameWinSong", "param/song/gameWin.wav");
	game.load.audio("gameLostSong", "param/song/gameLost.mp3");
	game.load.audio("winSong", "param/song/win.wav");
	game.load.audio("looseSong", "param/song/loose.wav");
	game.load.audio("ambiance", "param/song/zic.mp3");
}

//LANCEMENT DE LA CREATION DU JEU
function create() {
	//lancement musique
	songAmbiance = game.add.audio("ambiance");
	songAmbiance.loop = true;
	songAmbiance.play();
	//creation des sons
	songLiftOpen = game.add.audio("liftOpen");
	songLiftClose = game.add.audio("liftClose");
	songLiftUpside = game.add.audio("liftUp");
	songGameWin = game.add.audio("gameWinSong");
	songLoose = game.add.audio("looseSong");
	songGameLoose = game.add.audio("gameLostSong");
	songWin = game.add.audio("winSong");

	adjust();
	createGame();
}

function update() {
	updateLift();
}

window.addEventListener('resize', function() {       
	adjust();   
});

function adjust() {
	var divgame = document.getElementById("AscenseurDuPrix");	
	divgame.style.width = window.innerWidth + "px";	
	divgame.style.height = window.innerHeight + "px";
	console.log(divgame);	
	game.input.maxPointers = 1;		
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;		
	game.scale.pageAlignHorizontally = true;		
	game.scale.pageAlignVertically = true;		
	//game.scale.setScreenSize(true);        
	game.scale.refresh();
}