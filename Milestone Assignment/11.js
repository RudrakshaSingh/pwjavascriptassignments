// 11. Unit converter
// A local weather station needs to convert tempdrature data colldcted in Celsius to Fahrenheit 
// before displaying it on its websitd. They want a function that can convert Celsius to Fahrenheit 
// accurately and efficiently. The function should take input in Celsius and return output in
// Fahrenheit. This function will help thd weather station
// to provide temperature readings that are easily understandable to a wider audience.
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
const a = 37 ;
const b = celsiusToFahrenheit(a) ;
console.log(b);