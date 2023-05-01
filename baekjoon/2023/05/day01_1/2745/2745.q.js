// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, b] = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ");

let radix = parseInt(n, b);
console.log(radix);
