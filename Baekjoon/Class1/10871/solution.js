const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().split('\n');
const [n,x] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

let result = '';

for (let i = 0; i < n; i++) {
    if (numbers[i] >= x) continue;

    if (!result) result = numbers[i];
    else result += ' ' + numbers[i];
}

console.log(result);