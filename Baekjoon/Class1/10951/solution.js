const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

let result = '';
inputs.forEach(input => {
    const [a,b] = input.split(' ').map(Number);
    result += `${a+b}\n`;
})

console.log(result);