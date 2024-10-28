const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 티셔트 T장만, 펜 P자루만 주문 가능
// 티셔츠는 남아도 되지만 부족해선 안됨
// 펜은 정확히 참가자 만큼

const n = Number(input[0]);
const tShirts = input[1].split(" ").map(Number);
const [t,p] = input[2].split(" ").map(Number);

let tShirtsCount = 0;
const penCount = Math.floor(n / p);

tShirts.forEach(tShirt => {
    tShirtsCount += Math.ceil(tShirt / t);
})

const result = `${tShirtsCount}\n${penCount} ${n-penCount * p}`

console.log(result);