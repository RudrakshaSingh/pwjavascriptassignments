// 1. Type Conversion.
// Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.
function convertToNumber(num) {
    try {
        let a= Number(num)
        if (isNaN(num)){
            throw new Error("invalid")
        }
        else{
            console.log(a);
        }
    } catch (error) {
        console.log("invalid number");
    }
}
convertToNumber("123")
convertToNumber("abc")
convertToNumber([1,2,4])