// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [inputs, n] = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
const numbers = inputs.split(' ').map(Number)
const numberN = n.split(' ').map(Number)
numberN.forEach(t => {
    if(t < numbers[1]) {
        console.log(t);
    }
})