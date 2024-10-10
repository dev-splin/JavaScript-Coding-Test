const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, number] = input;

const numbers = Array.from(number);

const result = numbers.map(Number).reduce((acc, number) => acc + number);

console.log(result);