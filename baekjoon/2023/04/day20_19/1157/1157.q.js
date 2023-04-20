// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

let change = input.toUpperCase();
let arr = [];

//중복확인
const getElCount = (arr) =>
  arr.split("").reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
const obj = getElCount(change);

//객체정렬
const out = Object.fromEntries(
  Object.entries(obj).sort(([, a], [, b]) => (a > b ? -1 : 1))
);

for (let key in out) {
  arr.push([key, out[key]]);
}

if (change.length === 1) {
  console.log(change);
} else if (arr[0][1] === arr[1][1]) {
  console.log("?");
} else {
  console.log(arr[0][0]);
}
