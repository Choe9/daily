// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync(__dirname + "/test.txt").toString().trim();

// for(let i = 0; i < Number(input[0]); i++) {
//     star += "\n";
//     for(let j = 4; j > i; j--) {
//         star += " ";
//     }
//     for(let n = 0; n <= i; n++) {
//         star += "*";
//     }
// }
//star = star.substring(1);

let count = Number(input);
for(let i = 0; i < count; i++) {
    const emptyCount = count-i-1

        console.log(' '.repeat(emptyCount)+'*'.repeat(i+1))

}

