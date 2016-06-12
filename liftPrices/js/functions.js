/*
 * iDol scratch game
 * @author Dolmen Technologies
 * V1.0
 * 
 * Use idol-tickets.js to manage tickets game
 */

/**
 * JEU DE LASCENSEUR DU PRIX
 * Réalisé par Valentin Renard & Celine Meunier
 * Le 11/06/2016
 * Version : 1.0
 */

var isMobile = new RegExp('/iphone|ipad|ipod|android|blackberry/i').test(navigator.userAgent.toLowerCase());
if (!isMobile) {
    $(window).load(function () {
        console.log('Demarrage depuis le navigateur');
        startModule(context);
    });
}

/**
* Module initialization
* Function called from the app
* @param param context saved by the app
*/
function startModule(param)
{
	if (param) context = param;
	//Do something
	startGame(param); //lancement du jeux 
}

/**
* Module reinitialization
* Function called from the app when the scenario restart for the next customer
* @param param context saved by the app
*/
function reStartModule(param)
{
	if (param) context = param;
	//Do something
	startGame(param);

}

