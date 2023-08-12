// 3.Write a function that takes two numbers as arguments and returns their sum. Declare 
// a variable inside the function using the var keyword and log its value to the console 
// before it is assigned a value to demonstrate variable hoisting.
function addNumbers(a, b) {
    console.log(myVariable);
    var myVariable; // Variable declaration (hoisted)
    console.log(myVariable);
    myVariable = "Hello, variable!"; // Variable assignment
    console.log(myVariable)
  
    return a + b;
  }
  
  console.log(addNumbers(5, 3));
  