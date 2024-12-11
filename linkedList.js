//Creating a LinkedList

class Node{
    constructor(data, next){
        this.data = data;
        this.next = next || null;
    }
}

class LL {
    constructor(){
        this.head = null;
    }
    
    add(data){
        const newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
        }
        else{
            let curr = this.head;
            while(curr.next !== null){
                curr = curr.next;
            }
            curr.next = newNode;
        }
    }
}

let l1 = new LL();
//Adding Nodes in linkedList
l1.add(1)
l1.add(2)
l1.add(2)

let l2 = new LL();
//Adding Nodes in linkedList
l2.add(2)
l2.add(6)
l2.add(3)

//Traversing the LinkedList

function traverseList(list){
    let curr = list.head;
    while(curr !== null){
        console.log(curr.data);
        curr = curr.next;
    }
    return list;
}

//Reversing the LinkedList

function reverseList(list){
    let curr = list.head;
    let prev = null;
    
    while(curr !== null){
        let nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }
    return prev;
}

traverseList(l2);