// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

//console.log(input[0].split(" "));
console.log(input);

const arr1 = [];
const arr2 = [];
let result1 = 0;
let result2 = 0;
let creditAvg = 0;

for (let i = 0; i < input.length; i++) {
  arr1.push(input[i].split(" "));
  arr2.push(input[i].split(" "));
}

for (let k = 0; k < arr1.length; k++) {
  if (arr1[k][2] === "A+") {
    arr1[k][2] = 4.5;
  } else if (arr1[k][2] === "A0") {
    arr1[k][2] = 4.0;
  } else if (arr1[k][2] === "B+") {
    arr1[k][2] = 3.5;
  } else if (arr1[k][2] === "B0") {
    arr1[k][2] = 3.0;
  } else if (arr1[k][2] === "C+") {
    arr1[k][2] = 2.5;
  } else if (arr1[k][2] === "C0") {
    arr1[k][2] = 2.0;
  } else if (arr1[k][2] === "D+") {
    arr1[k][2] = 1.5;
  } else if (arr1[k][2] === "D0") {
    arr1[k][2] = 1.0;
  } else if (arr1[k][2] === "F") {
    arr1[k][2] = 0.0;
  }
}

// const subjectAvg = arr.reduce((ac, v) => ac + v);
// console.log(subjectAvg);

for (let a = 0; a < arr1.length; a++) {
  if (arr2[a][2] !== "P") {
    result1 += arr1[a][1] * arr1[a][2];
    console.log(arr1[a][1] * arr1[a][2]);
    console.log(arr2[a][2]);
    result2 += Number(arr1[a][1]);
  }
}

creditAvg = result1 / result2;

if (result1 === 0 && result2 === 0) {
  creditAvg = 0;
  console.log(creditAvg.toFixed(6));
} else {
  console.log(creditAvg.toFixed(6));
}

// for (let i = 0; i < credit.length; i++) {
//   const divided = result.split(credit[i]);
//   //   console.log(divided);
//   //   console.log(credit[i]);
//   if (result.match(credit[i]) === "A+") {
//     result = divided.join("4.5");
//   } else {
//     result = divided.join("4.0");
//   }
//   result;
// }
