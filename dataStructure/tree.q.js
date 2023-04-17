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
                            return false
                        }
                        break;
                    }
                    node = node.right;
                } else if(node.value === value) {
                    return true
                } else {
                    if(!node.left) {
                        if(node.value !== value) {
                            return false
                        }
                        break;
                    }
                    node = node.left;
                }
            }
        },
        delete:function (value) {
            let node = this.head;
            let parent = null
            let isHeadTarget = false

            while(true) {
                if(value > node.value) {
                    if(value === node.right.value) {
                        parent = node
                    }
                    node = node.right
                } else if(value < node.value) {
                    if(value === node.left.value) {
                        parent = node
                    }
                    node = node.left
                }

                if(parent) {
                    if(!node.right) {
                        if(parent.value < node.value) {
                            parent.right = node.left
                            return
                        } else {
                            parent.left = node.left
                            return
                        }
                    }

                    const targetNode = node // 지워야 할 노드
                    node = node.right

                    while(true) {
                        if(node.left.left) {
                            node = node.left
                        } else {
                            const tempNode = node.left
                            // right 가 있는 경우
                            if(node.left.right) {
                                node.left = node.left.right
                            }
                            tempNode.left = targetNode.left
                            tempNode.right = targetNode.right
                            if(parent.value > value) {
                                parent.left = tempNode
                                return
                            } else {
                                parent.right = tempNode
                                return
                            }
                        }
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
tree.insert(7);

tree.delete(15)
const t = tree.search(15)
t
