// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(input.slice(0, input.length - 1));
const inputs = input.slice(0, input.length - 1);
let answer = [];

for (let i = 0; i < inputs.length; i++) {
  let sum = 0;
  let str = "";
  for (let j = 0; j < inputs[i]; j++) {
    //console.log(inputs[j]);
    if (inputs[i] % j === 0) {
      sum += j;
      str += j + " + ";
    }
  }
  if (sum === inputs[i]) {
    answer.push(sum + " = " + str.slice(0, str.length - 3));
    //   console.log(sum + " = " + str.slice(0, str.length - 3));
    //   console.log(str);
  } else {
    answer.push(inputs[i] + " is NOT perfect.");
    //console.log("is NOT perfect.");
  }
}

console.log(answer.join("\n"));
