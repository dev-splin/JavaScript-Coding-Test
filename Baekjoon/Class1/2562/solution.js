const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const numbers = input.map(Number);
let max = 0;
let resultIndex = 0;

numbers.forEach((number, index) => {
    if (number > max) {
        max = number;
        resultIndex = index + 1;
    }
})

console.log(`${max}\n${resultIndex}`);