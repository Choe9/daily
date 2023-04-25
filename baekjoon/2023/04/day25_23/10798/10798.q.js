// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);

// let arr = [];
let sero = [];
// for (let i = 0; i < input.length; i++) {
//   arr.push(input[i].split(""));
// }
// console.log(arr);

const maxLength = Math.max(...input.map((i) => i.length));

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    sero += input[j][i] || "";
  }
}

console.log(sero);
