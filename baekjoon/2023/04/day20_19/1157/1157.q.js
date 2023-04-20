// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

let change = input.toUpperCase();
let arr = [];
const result = [
  ...new Set(
    change.split("").filter((item, index) => change.indexOf(item) !== index)
  ),
];
const getElCount = (arr) =>
  arr.split("").reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
const obj = getElCount(change);

for (let i = 0; i < result.length; i++) {
  for (let key in obj) {
    if (key === result[i]) {
      arr.push([key, obj[key]]);
    }
  }
}

let sortArr = [...arr].sort((a, b) => a - b);

console.log(result);
console.log(obj);
console.log(arr.sort((a, b) => a - b));
console.log(sortArr);
console.log(sortArr.length);
