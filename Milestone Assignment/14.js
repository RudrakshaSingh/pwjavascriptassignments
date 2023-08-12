// 14. Calculate the final order price
// A retail store needs to calculate the total cost of items in a customer's cart. A customer 
// cart is an array ofobjects with unit price and quantity. Implement an arrow function to calculate 
// the total cost of items, based onthe unit price and quantity of each item.
const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 15, quantity: 3 },
    { unitPrice: 20, quantity: 1 }
];
const a = (cart) =>{
    let total = 0
    cart.forEach(el => {
        const { unitPrice, quantity } = el;
        let costOfEach = unitPrice * quantity
        total = total + costOfEach
    });
    console.log(total);
}
a(cart)