//creation du jeu
var game = new Phaser.Game(1536, 2048, Phaser.AUTO, "AscenseurDuPrix", { preload: preload, create: create });

//ici les fichiers du jeu (image, son etc..) sont préchargés
function preload() {
	//game.load.image("chat", "ressources/images/chat.png");//importation de l'image on lui donne un nom "chat"
}

//dans cette section on effectue la création des objets su jeu nommé sprite (bouton, produit)
function create() {
	//game.add.sprite(0,0, "chat");//creation du sprite en se basant sur le nom chargé ci dessus "chat" avec coordonnées de placement x = 0, y = 0
}

