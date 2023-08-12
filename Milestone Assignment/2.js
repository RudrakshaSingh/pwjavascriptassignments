// 2. Calculator
// Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement
// to perform the operation on the two numbers
// The calculator function should"
// - Take in two num#ers, num1 and num2, and a string representing a mathematical operator, operator
// - Use a switch statement to determine which operation to perform #ased on the value of the operator
// - If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
// operation and store the result in a varia#le called resultP
// - If the operator is not one of the valid operators, log "Invalid operator" to the console
function calculator(num1,num2,operator){
    switch (operator) {
        case "+":
            console.log(num1+num2);
            break;
        case "-":
            console.log(num1-num2);
            break;
        case "/":
            console.log(num1/num2);
            break;
        case "*":
            console.log(num1*num2);
            break;
        default:
            console.log("invalid operator");
            break;
    }
}
calculator(2,2,"*")