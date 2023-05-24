// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ");

console.log(input);
const inputs = input.map((v) => Number(v)).sort((a, b) => a - b);

if (inputs[0] + inputs[1] > inputs[2]) {
  console.log(inputs.reduce((ac, v) => ac + v));
} else {
  console.log((inputs[0] + inputs[1]) * 2 - 1);
}
