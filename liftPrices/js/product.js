var products; //contient les produits de base
var product;//contient le produit résultat du random
var result;// contient le resultat de l'operation entre le faux et vrai produit

//affiche sur l'écran le nom, l'image ainsi que le prix approximatif
function displayProduct(product) {
    //game.add.sprite(x,y, nomImage)
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
    if (tmpRealPrice < tmpWrongPrice)
        var result = "priceLess";
    else
        var result = "priceMore";
}
