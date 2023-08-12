// 2. String Manipulation.
// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
// with the manipulated string or the new string to the console.
function manipulateString(str,logString) {
    const manipulatedString = str.toUpperCase();
    console.log(logString(manipulatedString));
}
function logString(manipulatedString) {
    return ("The manipulated string is: " + manipulatedString);
}
  
const sentence = "Hello, World!";
const logManipulatedString = manipulateString(sentence,logString);