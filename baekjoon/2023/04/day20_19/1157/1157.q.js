// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = require("fs")
//   .readFileSync(__dirname + "/test.txt")
//   .toString()
//   .trim();

// let change = input.toUpperCase();
// let arr = [];
// let arrNum = [];

// //중복확인
// const getElCount = (arr) =>
//   arr.split("").reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
// const obj = getElCount(change);

// //객체정렬
// const out = Object.fromEntries(
//   Object.entries(obj).sort(([, a], [, b]) => (a > b ? -1 : 1))
// );

// for (let key in out) {
//   arr.push([key, out[key]]);
//   arrNum.push(out[key]);
// }

// const setCollection = new Set(arrNum);
// const isDuplicate = setCollection.size < arrNum.length;

// if (change.length === 1) {
//   console.log(change);
// } else if (isDuplicate) {
//   console.log("?");
// } else {
//   console.log(arr[0][0]);
// }

const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .toLowerCase();

const result = new Array(26).fill(0);
for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97]++;
}

const max = Math.max(...result);
const index = result.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) {
    isSame = true;
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));
