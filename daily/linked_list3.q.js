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
                console.log(node);
                node = node.next;
            }
            console.log(node);
        },
        // del: function(input) {
        //     let node = this.head;
        //     while(node.next) {
        //         node = node.next;
        //         if(node.data == input) {
        //             if(node.next != null) {
        //                 node.data = null;
        //                 console.log(node)
        //             } else {
        //                 node.next = null;
        //             }
        //         }
        //     }
            
        //     console.log(node)
        //     //node.next = makeNode(input);
        // },
    }
}
const linkedList = makeLinkedList(1);
//linkedList.desc();
linkedList.add(2);
//linkedList.desc();
linkedList.add(3);
//linkedList.desc();
linkedList.add(4);
// linkedList.del(2);
//linkedList.desc();
