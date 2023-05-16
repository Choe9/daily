// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);
const inputs = input.map((v) => v.split(" ").map((x) => +x));

let x = [];
let y = [];

for (let i = 0; i < inputs.length; i++) {
  for (let j = 0; j < 1; j++) {
    x.push(inputs[i][0]);
    y.push(inputs[i][1]);
  }
}

// let x = input.map((v) => v[0]).sort((a, b) => a - b);
// let y = input.map((v) => v[1]).sort((a, b) => a - b);

x = x[0] === x[1] ? x[2] : x[0];
y = y[0] === y[1] ? y[2] : y[0];

console.log(x, y);
