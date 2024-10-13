const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const numbers = input[1].split(' ').map(Number);

let min = 10000000;
let max = -10000000;

numbers.forEach(number => {
    min = Math.min(min, number);
    max = Math.max(max, number);
})

console.log(`${min} ${max}`)