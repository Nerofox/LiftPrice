var products = JSON.parse(data); //contient les produits de base
var product;//contient le produit résultat du random
var result;// contient le resultat de l'operation entre le faux et vrai produit
var priceDisplay;
var resultChoice;
var moreOrLess;
var clickLess;
var clickMore ;



//affiche sur l'écran le nom, l'image ainsi que le prix approximatif
function displayProduct(product) {
   game.add.sprite(670,1800,product.name);
   
    /*if (pdt == displayProduct){
       
        game.add.sprite(670,1800,"displayProduct");
    }*/
    priceDisplay = product.wrongPrice;
    priceText = game.add.text(670, 1700, priceDisplay.toFixed(2), { font: "100px Arial", fill: "#660000" });

}

function setProducts(productsParam) {
    products = productsParam;
}

function randomProduct() {
    var tmpProduct = Object.keys(products);
    var randomPropertyName = tmpProduct[ Math.floor(Math.random()*tmpProduct.length) ];
    product = products[randomPropertyName];
    return product;
}

//Boolean moreOrLess = choix de l'utilisateur
//doit retourner un Boolean
function checkPrice(moreOrLess){
   
    /*if ((product.realPrice < product.wrongPrice) && (less == true)) {
       moreOrLess = true;
    }else if ((product.realPrice > product.wrongPrice) && (more == true)){
        moreOrLess = true;
    }else{
        moreOrLess = false;

    }
    console.log(moreOrLess);
  */ 
}

/*
 * Declenché quand le bouton plus est cliqué
 */
/*function onClickMore() {
	alert("more");
}*/

