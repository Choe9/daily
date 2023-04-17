const makeNode = (data, next = null) => {
    return {
        data,
        next
    }
}

const node1 = makeNode(1); //노드의 첫 번째 값 put
const head = node1; // 첫번째 노드를 알기 위함 (이때 next는 null)

const add = (data) => { 
    let node = head; // 첫번째 노드
    while(node.next) { // next가 null이 아닐때까지...
        node = node.next;
    }
    node.next = makeNode(data); // 마지막 next에 추가
}
add(2)
add(3)
console.log(head)

const desc = () => {
    let node = head

    while(node.next) {
        console.log(node.data);
        node = node.next
    }
    console.log(node.data);
}

desc()

console.log(head)