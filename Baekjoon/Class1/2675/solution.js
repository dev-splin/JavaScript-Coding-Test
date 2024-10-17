const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const t = input[0];

let result = '';
for (let i = 1; i <= t; i++) {
    const [r,s] = input[i].split(" ");


}
