const [...input] = fs
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => Number(t));

input.sort((a, b) => a - b);
let arr = [];
for (let i = 0; i < 30; i++) {
  arr.push(i + 1);
}

let difference = arr.filter((x) => !input.includes(x));
console.log(difference.join(" "));
