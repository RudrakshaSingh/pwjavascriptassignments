// 8. Inverted right-angled triangle pattern with asterisks
// Write a program that takes an intdger input i and prints an inverted 
// right-angled triangle pattern of asterisks with i rows.
function invertedRightAngledTrianglePattern(i){
    for (let row = i ; row > 0; row--) {
        let pattern = ""
        for (let k = 0; k < row; k++) {
            pattern = pattern + "*"   
        }   
        console.log(pattern);     
    }
}
let i=5;
invertedRightAngledTrianglePattern(i);