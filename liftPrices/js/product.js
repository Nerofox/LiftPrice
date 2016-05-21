var products; //contient les produits de base
var product;

//affiche sur l'écran le nom, l'image ainsi que le prix approximatif
function displayProduct(productParam) {
    game.add.text(50, 1800, "Ce produit vaut-il plus ou moins?",{ font: "100px Arial", fill: "#FF0000" });
    game.add.text(590, 800, productParam.name,{ font: "100px Arial", fill: "#FF0000",align: "center" });
    game.add.sprite(520,1000, productParam.name);
    game.add.text(350, 1500, "prix estimé :" + productParam.wrongPrice.toFixed(2) + " €",{ font: "100px Arial", fill: "#FF0000" });
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
    if ((product.realPrice < product.wrongPrice) && (moreOrLess==false)){
        return true;
    }else if ((product.realPrice > product.wrongPrice)&&(moreOrLess==true)){
        return true;
    }else{
        return false;
    }
    
 }

