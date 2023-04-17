// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ");

const arr = [];

function reverseInt(n) {
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}

for (let i = 0; i < input.length; i++) {
  arr.push(reverseInt(input[i]));
}

arr[0] < arr[1] ? console.log(arr[1]) : console.log(arr[0]);
