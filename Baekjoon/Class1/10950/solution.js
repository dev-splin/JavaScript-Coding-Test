const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().split('\n');
const t = Number(input[0]);

let result = '';

for (let i = 1; i <= t; i++) {
    let [a,b] = input[i].split(' ').map(Number);
    result += `${a+b}\n`;
}

console.log(result);