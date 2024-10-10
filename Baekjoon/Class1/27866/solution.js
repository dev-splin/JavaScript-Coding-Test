const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [s,i] = input;

console.log(s.slice(i-1,i));

