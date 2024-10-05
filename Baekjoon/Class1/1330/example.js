const fs = require("fs");
const input = fs.readFileSync('example.txt').toString().split(' ');

const [a,b] = input.map(Number);
let result;

if (a < b) result = '<';
else if (a > b) result = '>';
else result = "==";

console.log(result);


