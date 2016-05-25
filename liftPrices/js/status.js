var displayGameWin;
var displayWinFloor;
var displayLooseFloor;
var displayGameLoose;
var displayImg;

/*
 * Affiche un message qui indique que la partie est gagnée, affiche aussi un bouton "terminé"
 */
function displayWinGame(display) {
    if (display == true){
        displayGameWin = game.add.text(350, 1000, "Bravo, vous avez gagné " ,{ font: "100px Arial", fill: "#006600"}); 
        displayGameWin.x = game.width/2 - displayGameWin.width/2 - 10;
        displayGameWin.visibility;
        displayImg = game.add.sprite(500,1200, "finish");
    }
}

/*
 * Affiche un message qui indique que le joueur à trouvée la bonne estimation
 */
function displayWin(display) {
    if (display == true){
        displayWinFloor = game.add.text(350, 1000, "Bravo, étage suivant " ,{ font: "100px Arial", fill: "#006600"}); 
        displayWinFloor.x = game.width/2 - displayWinFloor.width/2 - 10;
        displayWinFloor.visibility;
    }else{
        displayWinFloor.destroy();
    }
}
/*
 * Affiche un message qui indique que le joueur n'a pas trouvée la bonne estimation
 */
function displayLoose(display) {
    if (display == true){
        //looseLife();
        displayLooseFloor = game.add.text(350, 1000, "Désolé, réessayez " ,{ font: "100px Arial", fill: "#FF0000"}); 
        displayLooseFloor.x = game.width/2 - displayLooseFloor.width/2 - 10;
        displayLooseFloor.visibility;
    }else{
        displayLooseFloor.destroy();
    }
}

/*
 * Affiche un message qui indique que le joueur a perdu la partie, affiche aussi un bouton "terminé"
 */
function displayLooseGame(display) {
    if (display == true){
        displayGameLoose= game.add.text(350, 1000, "Désolé, vous avez perdu !" ,{ font: "100px Arial", fill: "#FF0000"}); 
        displayGameLoose.x = game.width/2 - displayGameLoose.width/2 - 45;
        displayGameLoose.visibility;
    }else{
        displayGameLoose.destroy();
    }
}
