// 4. Highest Marks
// A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters
// the marks of all five students in an array called "marks". Write a program that iterates through the array and
// finds the highest marks scored by any student in the class. The highest marks must then #e displayed to the
// teacher using the console. Make sure you use the ternary operator to find the student with the highest marks
function findHighestMarks(marks){
    let highestMarks=0
    marks.forEach(function(mark){
        highestMarks=mark>highestMarks ?mark:highestMarks;
})
    return highestMarks
}
let marks = [85, 92, 78, 95, 88];
let highestMarks = findHighestMarks(marks);
console.log("The highest marks scored by a student: " + highestMarks);