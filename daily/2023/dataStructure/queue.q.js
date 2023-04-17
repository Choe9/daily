let arr = [2,3,4,5];
function enqueue(input) {
    arr.push(input);
};

function dequeue() {
    return arr.shift();
};
enqueue(1);
console.log(arr)
enqueue(2)
console.log(arr)
let a = dequeue();
console.log(a);
let b = dequeue();
console.log(b)
