// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

input = input.slice(0, input.length - 1);

let inputs = input.map((v) => v.split(" ").map((x) => +x));
const sort = [];
const arr1 = [];
const arr2 = [];
const sum = [];

for (let i = 0; i < inputs.length; i++) {
  sort.push(inputs[i].map((v) => v).sort((a, b) => a - b));
}

console.log(sort);

for (let i = 0; i < sort.length; i++) {
  arr1.push(sort[i].slice(2, 3));
  arr2.push(sort[i].slice(0, 2));
}

for (let i = 0; i < arr2.length; i++) {
  sum.push(arr2[i].reduce((ac, v) => ac + v));
}

//console.log(arr1);
//console.log(sum);

for (let i = 0; i < arr1.length; i++) {
  const set = new Set(inputs[i]);
  //console.log(set.size);
  if (sum[i] > arr1[i]) {
    if (set.size === 1) {
      inputs[i] = "Equilateral";
    } else if (set.size === 2) {
      inputs[i] = "Isosceles";
    } else {
      inputs[i] = "Scalene";
    }
  } else {
    inputs[i] = "Invalid";
  }
}

console.log(inputs.join("\n"));
