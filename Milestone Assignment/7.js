// 7. Remove Duplicates
// In an online shopping application, customers can add multiple items to their cart. However, 
// sometimes customers accidentally add the same item more than once, resulting in duplicate 
// items in their cart. Theduplicate items not only make it difficult for the customer to track 
// the items they want to purchase but alsoaffect the accuracy of the purchase order.
// To solve this problem, thd application needs to remove duplicated items from the customer's 
// cart. Thd program should takd the customer's cart with duplicates as input, and return a new 
// cart without duplicates. Write a program to solve the problem of duplicate items in the cart by 
// removing duplicates.
function removeDuplicates(cart){
    let newCart = [];

    cart.forEach((element) => {
        if (!newCart.includes(element)){
            newCart.push(element)
        }
        
    });
    return newCart
}
let customerCart = ['1', '2', '1', '3', '2'];
let uniqueCart = removeDuplicates(customerCart);
console.log("New Cart without Duplicates: ", uniqueCart);