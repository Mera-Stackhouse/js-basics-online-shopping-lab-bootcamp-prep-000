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
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    var string = 'In your cart, you have ';
    for (i=0; i < cart.length - 1 ; i++) {
      string = string + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    string = string + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    return string;
  }
}

function total() {
  // write your code here
  var totalCost = 0; 
  for(i=0; i < cart.length; i++) {
    totalCost = totalCost + cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

var item = "apples";

addToCart(item);

//console.log(cart);

//console.log(cart[0].itemPrice);

console.log(cart);

console.log (total());
