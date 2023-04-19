// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("");

const inputReverse = [...input].reverse();
console.log(inputReverse.join("") === input.join("") ? 1 : 0);
