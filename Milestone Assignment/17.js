// 17. Build a banking application
// A banking application needs to manage customer accounts and transactions. The user detail is stored 
// in an object with a keys name and balance. Write functions using object methods to update 
// a customer's account balance based on a deposit or withdrawal.
const customer = {
    name: "John Doe",
    balance: 5000,
    depositingMoney: function(amount) {
      if (amount>0) {
        this.balance = this.balance +amount
        console.log(`the amount:${amount} is succesfully deposited . new balance is ${this.balance}`);
      }
      else{
        console.log("insufficient amount or invalid");
      }
    }
    ,withdrawingMoney: function(amount) {
      if (amount>0 && amount<this.balance) {
        this.balance-=amount
        console.log(`the amount:${amount} is succesfully ithdrawn . new balance is ${this.balance}`);
        
      } else {
        console.log("insufficient amount or invalid withdrawing amount");
      }
    }
}
customer.depositingMoney(2000);
customer.withdrawingMoney(1000);
customer.withdrawingMoney(7000);