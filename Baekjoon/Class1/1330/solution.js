const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().split(' ');

const [a,b] = input.map(Number);
let result;

if (a < b) result = '<';
else if (a > b) result = '>';
else result = "==";

console.log(result);


