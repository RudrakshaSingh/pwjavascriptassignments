// 9. Check for divisibility.
// Write a program that takes an array of numbers and prints all the
// numbers that are divisible by 3, but not by 2. Usd a for loop and continuestatement.
function func(arr) {
    arr.forEach((element) => {
        if (element % 3 ===0 && element % 2 !==0){
            console.log(element);
        }
})}
let arr = ['1',"2","3","6","9","4","15"]
func(arr)