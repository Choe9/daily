const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
const cut = input[0].split(" ");
let hNum = Number(cut[0]);
let mNum = Number(cut[1]);

if(hNum === 0) {
    hNum = 24;
}

const time1 = hNum * 3600;
const time2 = mNum * 60;

const sec = time1 + time2;
const sec2 = sec - (45 * 60);

let h = Math.floor(sec2/3600);
let m = Math.floor((sec2%3600)/60);

while(h > 23) {
    h -= 24;
}

console.log(h +" "+ m);