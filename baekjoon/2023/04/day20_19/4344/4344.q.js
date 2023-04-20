// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...input] = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

let arr = [];
let arr2 = [];
let sum = 0;
let avg = [];
for (let i = 0; i < input.length; i++) {
  arr.push(input[i].split(" ").map(Number));
}
for (let j = 0; j < arr.length; j++) {
  for (let k = 0; k < arr[j][0]; k++) {
    sum += arr[j][k + 1];
    console.log(sum);
  }
  console.log(avg);
  avg.push(sum / arr[j][0]);
}

// arr.forEach((element, index) => {
//     obj[index + `${arr[4][0]}`] = element;
//   });

// input.forEach((t) => {
//   const [start] = t.split(" ").map(Number);
//   const first = t.slice(1, start);
//   console.log(first);
//   console.log(t.split(" ").map(Number));
//   arr = [...t];
// });
console.log(arr);
console.log(avg);
