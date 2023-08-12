// 13. Bill splitter
// A restaurant wants to calculate the total bill for a table based on the cost of each dish and 
// the number ofpeople sharing it. They require a function that takes in the cost of each dish 
// and the number of people sharingit and returns an object that contains the total bill and 
// the bill to be paid by each person in the group.
function billSplitter(costPerDish,persons) {
    let totalBill = 0       

    costPerDish.forEach(el => {
        totalBill = totalBill + el;
    });
    console.log("total bill is",totalBill,"bill per person",totalBill/persons);
}
const arr = [10,20,30,40]
billSplitter(arr,4)