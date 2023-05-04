// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

let range = 1,
  block = 1;

while (block < input) {
  block += 6 * range;

  range++;
}

console.log(range);
