const makeLinkedList = (initVal) => {
    const makeNode = (data, next = null) => {
        return {
            data,
            next
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
        },
        desc: function() {
            let node = this.head;
            while(node.next) {
                console.log(node.data);
                node = node.next;
            }
            console.log(node.data);
        },
        del: function(input) {
            let node = this.head;
            while(node.next) {
                if(input === this.head.data) {
                    this.head = node.next;
                    return;
                } else if (input === node.next.data) {
                    node.next = node.next.next;
                    return;
                } else if (node.next.next === null) {
                    if(node.next.data === input) {
                        node.next = null
                        return;
                    }
                }
                node = node.next;
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
linkedList.del(1);
linkedList.desc();
