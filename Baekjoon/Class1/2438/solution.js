const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().split('\n');

const n = Number(input[0]);

let result = "";
for (let i = 1; i <= n; i++) {
    result += "*".repeat(i) + '\n';
}

console.log(result);