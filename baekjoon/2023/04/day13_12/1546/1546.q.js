// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...input] = fs
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

let arr = input[0].split(" ").map((t) => Number(t));
arr = arr.sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i] / arr[arr.length - 1];
}
let avg = (sum / arr.length) * 100;
console.log(avg);
