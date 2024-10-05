
const fs = require("fs");
const input = fs.readFileSync('example.txt').toString().split(' ');
let [a,b] = input;

console.log(a/b);