const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const numbers = input.map(Number);

let result = `${numbers[0] + numbers[1] - numbers[2]}\n`;
result += Number(input[0] + input[1]) - input[2];

console.log(result);