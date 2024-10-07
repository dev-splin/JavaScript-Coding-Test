const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().split(' ').map(Number);

const sum = input.reduce((acc, number) =>  acc + number * number, 0);
const result = sum % 10;

console.log(result);