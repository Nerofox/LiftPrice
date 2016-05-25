//paramGame
var life;
var displayLives;

function setLife(nb) {
	life = nb;
}

function displayLife(bool){
    if (bool){
        displayLives = game.add.text(115, 80, life,{ font: "100px Arial", fill: "#FFFFFF"});
    }else{
        displayLives.destroy();
        displayLives = null;
    }
}


function removeLife(){
    life --;
    return life;
}

function checkLoose(){
    if(life == 0){
        return true;
    }else{
        return false;
    }
}
