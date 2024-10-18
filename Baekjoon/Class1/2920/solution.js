const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const numbers = input.map(Number);
let isMixed = false;

for (let i = 1; i < numbers.length; i++) {
    if (Math.abs(numbers[i] - numbers[i-1]) === 1) continue;

    isMixed = true;
    break;
}

if (isMixed) console.log("mixed");
else if (numbers[0] === 1) console.log("ascending")
else console.log("descending")



