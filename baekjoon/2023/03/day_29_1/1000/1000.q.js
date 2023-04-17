const num = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");

console.log('hi')
console.log(num[0])
const cut = num[0].split(' ');
const a = Number(cut[0]);
const b = Number(cut[1]);
console.log();

console.log(a+b)