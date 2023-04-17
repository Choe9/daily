// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ");

const c = [1, 1, 2, 2, 2, 8];
const arr = input.map(Number);
let e = [];

for (let i = 0; i < arr.length; i++) {
  if (c[i] < arr[i]) {
    e.push("-" + (arr[i] - c[i]));
  } else if (c[i] > arr[i]) {
    e.push(c[i] - arr[i]);
  } else if (c[i] === arr[i]) {
    e.push(0);
  }
}
console.log(e.map(Number).join(" "));
