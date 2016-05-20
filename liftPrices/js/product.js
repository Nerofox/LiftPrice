var products = JSON.parse(data); //contient les produits de base
var product = randomProduct();//contient le produit résultat du random




//affiche sur l'écran le nom, l'image ainsi que le prix approximatif
function displayProduct() {
    game.add.text(50, 1800, "Ce produit vaut-il plus ou moins?",{ font: "100px Arial", fill: "#FF0000" });
    
    game.add.text(590, 800, product.name,{ font: "100px Arial", fill: "#FF0000",align: "center" });
    game.add.sprite(520,1000,product.name);
    game.add.text(350, 1500, "prix estimé :"+product.wrongPrice.toFixed(2)+" €",{ font: "100px Arial", fill: "#FF0000" });
    

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
   
    if (product.realPrice < product.wrongPrice) {
        moreOrLess = false;
    }else if (product.realPrice > product.wrongPrice){
        moreOrLess = true;
    }
    if (moreOrLess == false){
    console.log('bouh');
    }else{
    console.log('grr');
    }
 }

