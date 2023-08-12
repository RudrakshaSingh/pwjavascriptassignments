// 2. Random Number Generator with Delay and Progress Indication:
// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.
// let delay = 3000;

// telling time remaining until random number generated
let random = setInterval(() => {
    delay = delay - 1000
    let ba = delay / 1000
    console.log("time reamaing is",ba,"until random number generated");    
}, 1000);

//generating radom number
setTimeout(() => { 
    clearInterval(random)
    let a = Math.floor(Math.random()*100)
    console.log("random number is :",a);
}, delay);