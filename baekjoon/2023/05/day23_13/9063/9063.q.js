// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...input] = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const inputs = input.map((v) => v.split(" ").map((x) => +x));
const x = [];
const y = [];
console.log(inputs);

inputs.forEach((item) => {
  console.log(item[1]);
  x.push(item[0]);
  y.push(item[1]);
});

console.log(
  (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
);
