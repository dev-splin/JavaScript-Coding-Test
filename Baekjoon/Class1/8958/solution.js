const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();

const result = [];
input.forEach((problem) => {
    let totalScore = 0;
    let problemScore = 0;

    for (const char of problem) {
        if (char === 'X') {
            problemScore = 0;

            continue;
        }

        totalScore += ++problemScore;
    }


    result.push(totalScore);
})

console.log(result.join("\n"));