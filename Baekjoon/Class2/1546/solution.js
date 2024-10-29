const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const scores = input[1].split(" ").map(Number);
const max = Math.max(...scores);
const sum = scores.reduce((sum, number) => sum + number / max * 100, 0);

console.log(sum/n);