// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\r\n");
let arr = [];
let sum = 0;
for(let a = 0; a < input.length; a++) {
    arr.push(input[a].split(" "));
}
for(let i = 1; i <= arr[0]; i++) {
    console.log(Number(arr[i][0]) + Number(arr[i][1]));
}
