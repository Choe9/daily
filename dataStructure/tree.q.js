const makeTree = (initVal) => {
    const makeNode = (value, right = null, left = null) => {
        return {
            value,
            right,
            left
        }
    }

    return {
        head: makeNode(initVal),
        insert: function(value) {
            let node = this.head;
            while(true) {
                if(value > node.value) {
                    if(!node.right) {
                        node.right = makeNode(value);
                        break;
                    }
                    node = node.right;
                } else {
                    if(node.left) {
                        node = node.left;
                    } else {
                        node.left = makeNode(value);
                        break;
                    }
                }
            }
        },
        search: function(value) {
            let node = this.head;
            while(true) {
                if(value > node.value) {
                    if(!node.right) {
                        if(node.value !== value) {
                            console.log("false");
                        }
                        break;
                    }
                    node = node.right;
                    if(node.value === value) {
                        console.log("true");
                    }
                } else {
                    if(!node.left) {
                        if(node.value !== value) {
                            console.log("false");
                        }
                        break;
                    }
                    node = node.left;
                    if(node.value === value) {
                        console.log("true");
                    }
                }
            }
        }
    }
}
const tree = makeTree(10);
tree.insert(15);
tree.insert(1);
tree.insert(4);

//tree
tree.search(4);