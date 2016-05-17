var products; //contient les produits de base
var tmpProduct; //variable temporaire contenant les produits pour le random
var propertyValue;//contient le produit résultat du random
var tmpRealPrice;// contient le prix reel du produit selectionne
var tmpWrongPrice;// contient le faux prix du produit selectionne
var result;// contient le resultat de l'operation entre le faux et vrai produit


//function createProduct{

var products = {
  "coca": {
     "img": "param/img/product/coca.png",
      "realPrice": 0.65,
      "wrongPrice": 1
    },
  
    "tagada": {
        "img": "param/img/product/fraise.png",
         "realPrice": 1.50,
        "wrongPrice": 2
    },
  
     "lait": {
         "img": "param/img/product/lait.png",
         "realPrice": 1.10,
         "wrongPrice": 0.85
    },
    
     "pain": {
         "img": "param/img/product/pain.png",
         "realPrice": 0.85,
         "wrongPrice": 0.50
    },
};

console.log(products);

//}


//function randomProduct{

var tmpProduct = Object.keys(products);
var randomPropertyName = tmpProduct[ Math.floor(Math.random()*tmpProduct.length) ];
var propertyValue = products[randomPropertyName];
console.log(propertyValue);




var tmpRealPrice = propertyValue.realPrice;
var tmpWrongPrice = propertyValue.wrongPrice;

//}


//function checkPrice(moreOrLess){
console.log(tmpRealPrice);
console.log(tmpWrongPrice);
if (tmpRealPrice < tmpWrongPrice)
    var result = "priceLess";
else
    var result = "priceMore";

console.log(result);
//}
    

