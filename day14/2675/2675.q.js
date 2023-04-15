// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...inputs] = fs
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

let arr = [];
let str = [];
let obj = [];

for (let i = 0; i < inputs.length; i++) {
  arr.push(inputs[i].split(" "));
  arr[i][0] = Number(inputs[i][0]);
}
for (let i = 0; i < arr.length; i++) {
  let a = 0;
  let b = 1;
  for (let j = 0; j < arr[i][1].length; j++) {
    for (let k = 1; k <= arr[i][0]; k++) {
      str += arr[i][1].slice(a, b);
    }
    a++;
    b++;
  }
  str += " ";
}

// for (let k = 0; k < arr.length; k++) {
//   obj = str.slice(k, arr[k][1].length-1);
// }

//str.push(artr[0][1].slice(0, 1));
console.log(str);
