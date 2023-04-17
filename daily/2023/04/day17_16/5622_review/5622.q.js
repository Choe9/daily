// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("");

const t = [
  3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10,
  10,
];

console.log(
  input.reduce((p, c) => p + t[c.charCodeAt() - "A".charCodeAt()], 0) //reduce
);

const z = {
  A: 3,
  B: 3,
  C: 3,
};
