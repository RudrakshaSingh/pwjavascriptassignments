// 4.Declare three variables, one using let, one using var, and one using const, all 
// inside a block scope. Assign values to them and log their values to the console before 
// and after they are declared to demonstrate variable hoisting.
{
    console.log(myVar);
    console.log(myLet);
    console.log(myConst);
  
    var myVar = "Variable with var";
    let myLet = "Variable with let";
    const myConst = "Variable with const";
  
    console.log(myVar);
    console.log(myLet);
    console.log(myConst); 
  }
  