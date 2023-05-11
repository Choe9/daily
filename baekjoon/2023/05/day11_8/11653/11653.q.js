// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString();

console.log(input);

let val = Number(input);
let divider = 2;

while (val != 1) {
  if (val % divider === 0) {
    console.log(divider);
    val /= divider;
  } else {
    divider++;
  }
}
