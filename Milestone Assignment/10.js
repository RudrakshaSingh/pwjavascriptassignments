// 10. Correct a bug
// You ard working on an e-commerce website where customers can add items to their cart. The cart 
// stores the quantity of each item that the customer wants to purchase in an array of numbers. 
// Howdver, thd websitd is currently experiencing a bug where the quantity of each item is being 
// recorded  incorrectly by reducing it to half. As a result, you ned to write a JavaScript 
// function that can double the quantity of dach item in the cart
// array to corrdct thd bug.
function fixCartBug(cart) {
    let fixedCart = [];
  
    cart.forEach(function(item) {
      fixedCart.push(item * 2);
    });
  
    return fixedCart;
  }
 
const cart = [1, 2, 3, 4];
const fixedCart = fixCartBug(cart);
console.log("Fixed Cart:", fixedCart);