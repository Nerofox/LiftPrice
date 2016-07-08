var products; //contient les produits de base
var product;
var tmpRandProduct = new Array();

var displayQuestion;
var displayName;
var displayImg;
var displayPrice;

//affiche sur l'écran le nom, l'image ainsi que le prix approximatif
function displayProduct(productParam) {
    if (displayQuestion == null) {
        displayQuestion = game.add.text(50, 1800, "Ce produit vaut-il plus ou moins?",{ font: "100px Arial", fill: "#000000" });
        displayName = game.add.text(590, 800, productParam.name,{ font: "100px Arial", fill: "#FFFFFF"});
        displayImg = game.add.sprite(520,1000, productParam.name);
        displayPrice = game.add.text(350, 1400, "Prix estimé :" ,{ font: "100px Arial", fill: "#FFFFFF"}); 
        displayEuro = game.add.text(350, 1500, productParam.wrongPrice.toFixed(2) + " €",{ font: "150px Arial", fill: "#FFFFFF" });
    } else {
        displayName.text = productParam.name;
        displayImg.loadTexture(productParam.name, 0);
        displayEuro.text = productParam.wrongPrice.toFixed(2) + " €";
    }
    //replacement des éléments
    displayName.x = game.width/2 - displayName.width/2 - 10;
    displayQuestion.x = game.width/2 - displayQuestion.width/2;
    displayImg.x = game.width/2 - displayImg.width/2 - 10;
    displayPrice.x = game.width/2 - displayPrice.width/2;
    displayEuro.x = game.width/2 - displayEuro.width/2;
}

function bringProductToTop() {
    game.world.bringToTop(displayQuestion);
    game.world.bringToTop(displayName);
    game.world.bringToTop(displayImg);
    game.world.bringToTop(displayPrice);
    game.world.bringToTop(displayEuro);
}

function randomProduct() {
    if (tmpRandProduct.length == 0) {
        for(i = 0; i < products.length; i++)
            tmpRandProduct.push(products[i]);
        shuffle(tmpRandProduct);
    }
    product = tmpRandProduct.pop();
    return product;
}

//mélange les éléments d'un tableau donné
function shuffle(a) {
    var j = 0;
    var valI = '';
    var valJ = valI;
    var l = a.length - 1;
    while(l > -1) {
        j = Math.floor(Math.random() * l);
        valI = a[l];
        valJ = a[j];
        a[l] = valJ;
        a[j] = valI;
        l = l - 1;
    }
    return a;
 }

//Boolean moreOrLess = choix de l'utilisateur
//doit retourner un Boolean
function checkPrice(moreOrLess){
    if ((product.realPrice < product.wrongPrice) && (moreOrLess==false)){
        return true;
    } else if ((product.realPrice > product.wrongPrice)&&(moreOrLess==true)) {
        return true;
    } else {
        return false;
    }
}