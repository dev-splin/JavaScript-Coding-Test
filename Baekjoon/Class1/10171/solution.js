const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().split(' ');

const result = `\\    /\\
 )  ( ')
(  /  )
 \\(__)|`;

console.log(result);