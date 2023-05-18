// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(input);

const set = new Set(input);
console.log(set.size);
const val = input.reduce((ac, v) => ac + v);

if (val === 180) {
  if (set.size === 1) {
    console.log("Equilateral");
  } else if (set.size === 2) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
} else {
  console.log("Error");
}
