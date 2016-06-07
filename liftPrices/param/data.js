/*
 * iDol Module Parameters
 * @author Dolmen Technologies
 *
 * Contains parameters passed to the module through the context object
 */

//configuration du jeux, ajuster selon la difficultée choisie
var context = {
    "life" : 3, //nombre d'éssai du joueur avant défaite 
    "floor" : 5 //nombre d'étage à franchir pour gagner (nombre de niveau)
}

var outputWin = 
{
	context:context,
	message : "Vous avez gagné",
	winner : true,
	gift : "2", //dans notre exemple le produit avec l'id numéro 2 (dans le fichier products.json) sera le cadeau gagnant
	restart: false,
	validate: false,
	answers:[]
}

var outputLoose = 
{
	context:context,
	message : "Vous avez perdu",
	winner : false,
	gift : "LOST",
	restart: false,
	validate: false,
	answers:[]
}
