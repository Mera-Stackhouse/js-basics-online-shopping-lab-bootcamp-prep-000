var cart = [{ itemName: 'bananas', itemPrice: 76 }];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var number = Math.floor(Math.random() * Math.floor(101));
 var newItem = {};
 newItem.itemName = item;
 newItem.itemPrice = number;
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length = 0) {
    return 'Your shopping cart is empty.';
  } else {
    var string = 'In your cart, you have ';
    //for (i=0; i < ; i++) {
     // string = string + cart[]
    //}
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

var item = "apples";

addToCart(item);

console.log(cart);

console.log(cart[1,0]);


