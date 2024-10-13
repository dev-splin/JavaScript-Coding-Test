const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const [h,m] = input.map(Number);

let resultMinute;
let resultHour;

if (m >= 45) {
    resultHour = h;
    resultMinute = m - 45;
} else {
    resultHour = h - 1 < 0 ? 23 : h - 1;
    resultMinute = m + 15;
}

console.log(`${resultHour} ${resultMinute}`);
