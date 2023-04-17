const makeLinkedList = (initVal) => {
    const makeNode = (data, next = null, before = null) => {
        return {
            data,
            next,
            before
        }
    }

    return {
        head: makeNode(initVal),
        add: function(input) {
            let node = this.head;
            while(node.next) {
                node = node.next;
            }
            node.next = makeNode(input);

            node.next.before = node;
            //console.log(node.next.before);
        },
        desc: function() {
            let node = this.head;
            while(node.next) {
                console.log(node.data);
                console.log("before : " + node.before);
                node = node.next;
            }
            console.log(node.data);
        },
        del: function(input) {
            let node = this.head;
            while(node.next) {
                //console.log(node.before)
                if(input === this.head.data) {
                    //node.next = node.before.next;
                    node.next.before = null
                    this.head = node.next
                    return
                } else if(input === node.data) {
                    let beforeNode = node.before
                    let nextNode = node.next

                    beforeNode.next = nextNode
                    console.log(beforeNode.next)
                    nextNode.before = beforeNode
                    console.log(nextNode.before)
                    return
                }
                node = node.next;
            }
            if(node.data === input) {
                node.before.next = null
                return
            }
            console.error(`입력한 값(${input})을 찾을 수 없습니다.`)
        },
    }
}
const linkedList = makeLinkedList(1);
//linkedList.desc();
linkedList.add(2);
//linkedList.desc();
linkedList.add(3);
//linkedList.desc();
linkedList.del(2);
linkedList.desc();
