// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...input] = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

let arr = [];
let avg = [];
let classAvg = [];
for (let i = 0; i < input.length; i++) {
  arr.push(input[i].split(" ").map(Number));
}
for (let j = 0; j < arr.length; j++) {
  let sum = 0;
  for (let k = 0; k < arr[j][0]; k++) {
    sum += arr[j][k + 1];
  }
  avg.push(sum / arr[j][0]);
}
for (let a = 0; a < avg.length; a++) {
  let count = 0;
  for (let b = 0; b < arr[a][0]; b++) {
    if (arr[a][b + 1] > avg[a]) {
      count++;
    }
  }
  classAvg.push(((count / arr[a][0]) * 100).toFixed(3));
}
console.log(classAvg.join("%\n") + "%");
