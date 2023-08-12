// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.
var items = {
    item1: 10,
    item2: 20,
    item3: 30
 };
  
function changeToRuoees(obj) {
    for (var key in obj) {
        obj[key] *= 80;
    }
    return obj;
}
let a = changeToRuoees(items)
console.log(a)