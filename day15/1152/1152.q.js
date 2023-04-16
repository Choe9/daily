// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .split("\n");

const arr = input[0].split(" ");
let result = arr.length;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "") {
    result -= 1;
  }
}
console.log(result);
