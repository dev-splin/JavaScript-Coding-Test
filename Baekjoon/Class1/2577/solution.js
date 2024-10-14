const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const result = Array.from({ length: 10}, () => 0);
const calcResult = input.map(Number).reduce((acc, number) => acc * number, 1).toString();

for (const char of calcResult) {
    ++result[Number(char)];
}

console.log(result.join("\n"));