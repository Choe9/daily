// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

let X = input;
let counter = 0;

while (X > 0) {
  counter++;
  X = X - counter;
}

if (counter % 2 === 0) {
  console.log(`${counter + X}/${1 + -X}`);
} else {
  console.log(`${1 + -X}/${counter + X}`);
}
