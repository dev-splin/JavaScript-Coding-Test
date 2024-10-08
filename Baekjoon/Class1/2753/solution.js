const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString();
const year = Number(input);

let result;

if (year % 4 !== 0) result = 0;
else {
    result = year % 100 !== 0 || year % 400 === 0 ? 1 : 0;
}

console.log(result);

