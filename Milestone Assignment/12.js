// 12. Calculate rental cost
// A car rental company needs to calculate the cost of a rental based on the number of days 
// rented and the type of car. They require a function that takes in the number of days rented 
// and car type and returns the rental cost. The total cost would be the rental cost multiplied 
// by the number of days rented.
// Thd rental costs are
// - Economy = Rs. 4000 /- per day
// - Midsize = Rs. 10,000 /- per day
// - Luxury = Rs. 20,000 /- per day.
function calculateRentalCost(daysRented, carType) {
    var rentalCostPerDay = 0;
    
    if (carType === "economy") {
      rentalCostPerDay = 4000;  
    } else if (carType === "midsize") {
      rentalCostPerDay = 10000;  
    } else if (carType === "luxury") {
      rentalCostPerDay = 20000;    
    } else {
      return "Invalid car type!";  
    }
    var totalCost = rentalCostPerDay * daysRented; 
    return totalCost;
}
console.log(calculateRentalCost(2,"economy"))
console.log(calculateRentalCost(2,"midsize"))
console.log(calculateRentalCost(2,"luxury"))
