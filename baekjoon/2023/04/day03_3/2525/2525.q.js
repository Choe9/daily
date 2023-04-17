const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
const cut = input[0].split(" ");
const cut2 = input[1].split(" ");
let hNum = Number(cut[0]);
let mNum = Number(cut[1]);
let mNum2 = Number(cut2[0]);

if(hNum === 0) {
    hNum = 24;
}

const time1 = hNum * 3600;
const time2 = mNum * 60;
const time3 = mNum2 * 60;

const sec = time1 + time2 + time3;

let h = Math.floor(sec/3600);
let m = Math.floor((sec%3600)/60);

console.log(h);

while(h > 23) {
    h -= 24;
}


console.log(h +" "+ m);