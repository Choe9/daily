// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
const arr = Number(input[0]);
const arithmeticSequence = (arr + 1) * arr / 2;
console.log(arithmeticSequence)