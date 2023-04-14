// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

let arr = [];

for(let i = 97; i <= 122; i++) {
    arr.push(input[0].indexOf(String.fromCodePoint(i)));
}

console.log(arr.join(" "));