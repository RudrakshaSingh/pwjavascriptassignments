// 6. Vowel Counter
// We want to count the num#er of vowels in a person's name. Given a name as input, the program should iterate
// through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should #e
// counted
function vowelCounter(name) {
    let sumOfVowel=0
    let lengthOfName=name.length
    let vowels=["a","e","i","o","u"]
    for (let i = 0; i < lengthOfName; i++) {
        let char = name[i].toLowerCase()
        if (vowels.includes(char)){
            sumOfVowel++
        }
    }
    return sumOfVowel
}
let name = "aihxAhjskU"
let a = vowelCounter(name)
console.log(a);