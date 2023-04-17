// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
const num = Number(input);
let mul = 0;
for(let i = 1; i < 10; i++) {
    mul = num * i;
    console.log(num +" * "+ i+" = "+mul);
}
