// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

//   let arr = [];

//   for (let i = 0; i < input.length; i++) {
//     arr.push(input[i].split(" ").map(Number));
//   }
const nums = input.map((v) => v.split(" ").map((x) => +x));

nums.forEach((v) => {
  if (v[1] != v[0]) {
    if (v[1] % v[0] === 0) {
      console.log("factor");
    } else if (v[0] % v[1] === 0) {
      console.log("multiple");
    } else {
      console.log("neither");
    }
  }
});
