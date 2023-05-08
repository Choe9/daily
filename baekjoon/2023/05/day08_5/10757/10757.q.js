// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ");

let A = BigInt(input[0]);
let B = BigInt(input[1]);
let answer = A + B;
console.log(answer.toString());
