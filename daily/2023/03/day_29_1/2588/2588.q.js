const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split('\n');
console.log(input)
const cut = input[1].split("");
const a = Number(input[0]);
const b = Number(input[1]);
const num1 = a * Number(cut[2]);
const num2 = a * Number(cut[1]);
const num3 = a * Number(cut[0]);
const num4 = a * b;
console.log(num1 + "\n" + num2 + "\n" + num3 + "\n" + num4)