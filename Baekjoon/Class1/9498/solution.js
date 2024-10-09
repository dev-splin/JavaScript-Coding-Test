const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString();
const num = Number(input);

let result;
if (num >= 90) result = "A";
else if (num >= 80) result = "B";
else if (num >= 70) result = "C";
else if (num >= 60) result = "D";
else result = "F";

console.log(result);