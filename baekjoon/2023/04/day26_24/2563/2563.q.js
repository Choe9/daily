// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...input] = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);
console.log(input[0].split(" "));

let arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const widthArr = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;

for (let i = 0; i < n; i++) {
  let X = +arr[i][0]; // 3
  let Y = +arr[i][1]; // 7
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      if (widthArr[X + j][Y + k] !== 0) {
        continue;
      }
      if (widthArr[X + j][Y + k] === 0) {
        widthArr[X + j][Y + k] = 1;
        count++;
      }
    }
  }
}
console.log(count);
