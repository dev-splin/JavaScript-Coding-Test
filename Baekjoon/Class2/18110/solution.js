const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift());

const findAvg = () => {
    if (n === 0) return 0;

    const sortedNumbers = input.map(Number).sort((a, b) => a - b);

    const limitCount = Math.round(n * 0.15);

    let sum = 0;
    for (let i = limitCount; i < n - limitCount; i++) {
        sum += sortedNumbers[i];
    }

    return Math.round(sum / (sortedNumbers.length - limitCount * 2));
}

const avg = findAvg();
console.log(avg);