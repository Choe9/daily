// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [nm, ...input] = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
const number = nm.split(' ').map(Number);
const numbers = [];

let ball = Array(number[0]).fill(0);

for(let i = 0; i < input.length; i++) {
    numbers.push(input[i].split(" ").map(item=>Number(item)));
}
for(let j = 0; j < numbers.length; j++) {
    for(let k = numbers[j][0]; k <= numbers[j][1]; k++) {
        ball[k-1] = numbers[j][2];
    }
}

console.log(ball.join(" "));

//수로가 푼 답
// const [[n,m], ...input] = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n").map(t => t.split(' ').map(Number));

// const results = Array(n).fill(0)

// for(let [i,j,k] of input) {
//     for(let index = i-1; index < j; index++) {
//         results[index] = k
//     }
// }
// console.log(input)
// console.log(results.join(' '))