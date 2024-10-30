const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

let numberIndex = 0;
inputs.forEach((input, index) => {
    if(!isNaN(input)) numberIndex = index;
})

const resultNumber = Number(inputs[numberIndex]) + 3 - numberIndex;
let result;

if (resultNumber % 3 === 0 && resultNumber % 5 === 0) result = "FizzBuzz";
else if (resultNumber % 3 === 0) result = "Fizz";
else if (resultNumber % 5 === 0) result = "Buzz";
else result = resultNumber;

console.log(result);




