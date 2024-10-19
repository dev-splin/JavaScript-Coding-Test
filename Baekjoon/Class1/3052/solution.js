const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const set = new Set();
const numbers = input.map(Number);

numbers.forEach(number => {
    set.add(number%42);
})

console.log(set.size);