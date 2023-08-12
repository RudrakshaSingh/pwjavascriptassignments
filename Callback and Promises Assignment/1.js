// 1. Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.
function doubleArray(arr, callback) {
    const doubledArr = arr.map(callback);
    return doubledArr;
}
  
const numbers = [1, 2, 3, 4, 5];
  
function double(num) {
    return num * 2;
}
  
const doubledNumbers = doubleArray(numbers, double);
console.log(doubledNumbers);