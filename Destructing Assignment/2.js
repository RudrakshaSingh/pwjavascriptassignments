// 02. Only unique items are allowed.
// You are building a program that takes an array of numbers as input and you need to 
// remove all the duplicates from the array. You want to write a function that can accomplish 
// this task efficiently and returns a new set that contains only the unique elements.

function uniqueArray(arr) {
    const a =new Set(arr)
    const newArr=[...a]
    console.log(newArr);
}
uniqueArray([1,2,3,1,2,3,4,5,5,6,3,3,5])