//in following shopping cart add,remove,and edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
//add item
shoppingCart.unshift("Meat");
//remove item
shoppingCart.pop();
//edit item
shoppingCart[1] = "Green Tea";
console.log(shoppingCart)