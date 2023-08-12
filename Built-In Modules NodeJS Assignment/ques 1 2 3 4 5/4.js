// 4. In this coding challenge, you will continue working with the file created in the previous assignments. Here
// your task is to access the existing nodejs_architecture.txt file and use the fs module to append additional
// data to it. Specifically, add some advantages of Node.js to the file and print the file content to the console.
const fs = require("fs");

fs.appendFileSync("nodejs_architecture.txt", "advantages of node js");

const data = fs.readFileSync("nodejs_architecture.txt");

console.log(data.toString())