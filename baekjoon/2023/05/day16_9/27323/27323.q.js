// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(input);

console.log(input[0] * input[1]);
