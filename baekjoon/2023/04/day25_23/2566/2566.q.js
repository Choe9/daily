// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input.join(" "));
let arr = [];
let rowColumn = [];
for (let i = 0; i < input.length; i++) {
  arr.push(input[i].split(" ").map(Number));
}

// let arrJoin = [input.join(" ")];
// arrJoin = arrJoin[0].split(" ").map(Number);
// const sortArr = arrJoin.sort((a, b) => a - b);
// const numMax = sortArr[sortArr.length - 1];
// console.log(numMax);

const newMax = Math.max(...arr.flat());

for (let j = 0; j < arr.length; j++) {
  for (let k = 0; k < arr[j].length; k++) {
    if (newMax === arr[j][k]) {
      rowColumn.push(j + 1);
      rowColumn.push(k + 1);
    }
  }
}

console.log(newMax);
console.log(rowColumn.join(" "));
