// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input[0].length);
