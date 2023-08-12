// 1. Password Validator
// Write a JavaScript program that checks if the entered password matches the confirmed password. If the
// passwords match, the program should log "Password Matched. Password validation Successful." to the console.
// Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console
function PasswordValidator(password,confirmedpassword){
    if (password===confirmedpassword){
        console.log("Password Matched. Password validation Successful.");
    }
    else{
        console.log("Password didn't match. Password validation unsuccessful");
    }
}
//example
PasswordValidator(123,123);