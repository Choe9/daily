// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...inputs] = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

// let arr = [];
// for (let i = 0; i < inputs.length; i++) {
//   arr.push(inputs[i].split(""));
// }
// const getElCount = (arr) =>
//   arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
// const obj = getElCount(arr[0]);
// console.log(obj);
const arr = inputs;
console.log(inputs);
// for (let i = 1; i < inputs.length; i++) {
//   arr.push(inputs[i]);
//   console.log(arr);
// }

let answer = arr.length;
console.log(answer);
let temp = "";

arr.forEach((item) => {
  console.log(item);
  console.log(item[0]);
  temp = item[0];
  for (let i = 1; i < item.length; i++) {
    console.log(temp.includes(item[i]));
    console.log(item[i - 1] !== item[i]);
    if (temp.includes(item[i]) && item[i - 1] !== item[i]) {
      //첫번째 값과 다음 값을 찾아내어 하나씩 비교하는 조건문
      answer--;
      console.log(answer);
      break;
    }
    console.log(item.length);
    temp += item[i];
    console.log(temp);
  }
  console.log(temp);
});

console.log(answer);
