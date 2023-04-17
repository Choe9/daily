// 실행컨텍스트 & 함수선언에대한 차이(함수표현식, 함수선언문)
const makeLinkedList = (initValue) => {
    const makeNode = (data,next=null) => {
        return {
            data,
            next
        }
    }

    return {
        head: makeNode(initValue),
        add: function(input){
            let node = this.head;
            while(node.next) {
                node = node.next;
            }
            node.next = makeNode(input);
            function A(){
                console.log(node);
            }
            A()
        },
        desc: function(){
            let node = this.head;
            while(node.next) {
                console.log(node.data);
                node = node.next;
            }
            console.log(node.data);
        }
    }
}

const linkedList = makeLinkedList(1)
linkedList.desc() // 1
linkedList.add(2)
linkedList.desc() // 1 2
//linkedList.add(3)

const test = { a: 1, b:function(){
    console.log('hi')
} }
test.b()