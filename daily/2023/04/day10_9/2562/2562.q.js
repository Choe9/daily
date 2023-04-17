// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n").map(Number);
const numbers = [...input]; //깊은복사
numbers.sort(function(a, b) {
    return a - b;
});

let s = 0;

for(let i = 0; i < input.length; i++) {
    if(numbers[numbers.length - 1] === input[i]) {
        s = i+1;
    }
}

console.log(numbers[numbers.length - 1] + '\n' + s);
