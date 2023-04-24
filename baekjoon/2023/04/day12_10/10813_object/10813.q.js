// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [nm, ...input] = fs
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");
const number = nm.split(" ").map(Number);
const numbers = [];

//let ball = Array(number[0]).fill(0);
let ball = {};
let ballStr = [];
for (let a = 1; a <= number[0]; a++) {
  ball[a] = a;
}
for (let i = 0; i < input.length; i++) {
  numbers.push(input[i].split(" ").map((item) => Number(item)));
}
for (let j = 0; j < numbers.length; j++) {
  if (
    ball[numbers[j][0]] === ball[numbers[j][0]] ||
    ball[numbers[j][1]] === ball[numbers[j][1]]
  ) {
    let temp = ball[numbers[j][0]];
    ball[numbers[j][0]] = ball[numbers[j][1]];
    ball[numbers[j][1]] = temp;
  } else {
    ball[numbers[j][0]] = numbers[j][1];
    ball[numbers[j][1]] = numbers[j][0];
  }
}
for (let key in ball) {
  ballStr.push(ball[key]);
}
console.log(ballStr.join(" "));
