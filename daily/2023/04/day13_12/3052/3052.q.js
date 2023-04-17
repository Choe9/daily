// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [...input] = fs
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => Number(t));

let arr = [];
for (let i = 0; i < input.length; i++) {
  arr.push(input[i] % 42);
}
arr = [...new Set(arr)];
console.log(arr.length);
