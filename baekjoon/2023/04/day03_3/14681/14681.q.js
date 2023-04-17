const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
const cut1 = input[0];
const cut2 = input[1];
const x = Number(cut1);
const y = Number(cut2);
let qua = 0;

if(x > 0 && y > 0) {
    qua = 1;
} else if(x < 0 && y > 0) {
    qua = 2;
} else if(x < 0 && y < 0) {
    qua = 3;
} else if(x > 0 && y < 0) {
    qua = 4;
}

console.log(qua);