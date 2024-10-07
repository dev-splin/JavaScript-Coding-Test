const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString();
const n = Number(input);

let result = ''
for (let i = 1; i <= n; i++) {
    result += i + '\n';
}

console.log(result);