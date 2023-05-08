// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const inputs = input.map((v) => v.split(" ").map((x) => +x));
let same = [];

inputs.forEach((v) => {
  for (let i = 1; i <= v[0]; i++) {
    if (v[0] % i === 0) {
      same.push(i);
    }
  }
});

if (same.length < inputs[0][1]) {
  console.log(0);
} else {
  console.log(same[inputs[0][1] - 1]);
}
