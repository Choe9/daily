// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 구조분해할당.

const [_, inputs, n] = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
const numbers = inputs.split(' ').map(Number)
const numberN = Number(n)

let count = 0
numbers.forEach(t => {
    if(t === numberN) {
        count += 1
    }
})

console.log(count)

// let arr = [];
// let count = 0;
// for(let i = 0; i < input.length; i++) {
//     arr.push(input[i].split(" ").map(item=>Number(item)));
// }
// for(let j = 0; j < arr[1].length; j++) {
//     if(arr[2][0] === arr[1][j]) {
//         count++;
//     }
// }
// console.log(input)