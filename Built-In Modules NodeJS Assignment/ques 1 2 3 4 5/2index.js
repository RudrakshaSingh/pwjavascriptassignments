// 2. In the same project directory created in the above assignment, your task is to create a new file index.js and
// using the fs module add information about Node.js architecture to a new file nodejs_architecture.txt. Below
// are the expected files in the project folder.
// index.js
const fs = require("fs");

const data ="Node.js is a platform that ";

fs.writeFileSync("nodejs_architecture.txt", data);
