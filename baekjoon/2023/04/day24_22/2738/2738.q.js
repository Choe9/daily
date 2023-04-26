// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [nm, ...inputs] = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

let arr1 = [];
let arr2 = [nm];
arr2 = arr2[0].split(" ").map(Number);
let sum = [];

for (let i = 0; i < inputs.length; i++) {
  arr1.push(inputs[i].split(" ").map(Number));
}
console.log(arr1);
console.log(arr2);

for (let j = 0; j < arr1.length; j++) {
  console.log(arr1[j + arr2[0]]);
  if (arr1[j + arr2[0]] !== undefined) {
    for (let k = 0; k < arr1[j].length; k++) {
      sum.push(arr1[j][k] + arr1[j + arr2[0]][k]);
      console.log(arr1[j][k] + arr1[j + arr2[0]][k]);
    }
  }
}

function chunk(data = [], size = 3) {
  const arr = [];

  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }

  return arr;
}

console.log(chunk(sum));
let hap = chunk(sum).join("\n");
console.log(hap.replace(/,/g, " "));
