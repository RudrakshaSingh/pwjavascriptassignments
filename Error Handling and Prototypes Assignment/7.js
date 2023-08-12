// 7. Password Checker.
// Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.
class User{
  constructor(username,password){
    this.username = username;
    this.password =password;
  }
  get Password(){
    return this.password.replace(/./g,"*")
  }
  set Password(newPassword){
    if (newPassword.length>=8 && /[A-Z]/.test(newPassword) && /[0-9]/.test(newPassword)){
      this.password=newPassword
    }else{
      console.log("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
    }
  }

}
const user=new User("Mithun","Password123")
console.log(user.Password);

user.Password="myPassword"
user.Password="MyPassword"
user.Password="MyPassword123"

console.log(user.Password);