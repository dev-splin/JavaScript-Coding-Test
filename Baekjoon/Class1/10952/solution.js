const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

let result = '';

for (let i = 0; i < inputs.length; i++) {
    const [a,b] = inputs[i].split(' ').map(Number);

    if (a === 0 && b === 0) break;

    result += `${a+b}\n`;
}

console.log(result);