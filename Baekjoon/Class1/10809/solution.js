const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim();

const result = Array.from({length:26}, () => -1);
for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);

    const index = char.charCodeAt(0) - 97;
    if (result[index] === -1) result[index] = i;
}

console.log(result.join(" "));