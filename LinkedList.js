class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class Linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }
    addFirst(data){
        this.head = new Node(data, this.head)
        this.size++
    }
    addLast(data){
        if (!this.head) {
            return this.addFirst(data)
        }
        let node = new Node (data)
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = node
        this.size++
    }
    addAtIndex(data, index){
        if (index < 0 || index > this.size) {
            return
        }
        if (index == 0) {
            return this.addFirst(data)
        }
        let node = new Node (data)
        let count = 0
        let previous
        let current = this.head
        while (count < index) {
            previous = current
            current = current.next
            count++
        }
        previous.next = node
        node.next = current
        this.size++
    }
    getAllData(){
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
    getDataByIndex(index){
        let current = this.head
        let count = 0
        while (count < index) {
            current = current.next
            count++
        }
        console.log(current.data)
    }
    deleteAtIndex(index){
        let count = 0
        let previous
        let current = this.head
        while (count < index) {
            previous = current
            current = current.next
            count++
        }
        previous.next = current.next
        this.size--
    }
}

let node = new Linkedlist()

node.addFirst(1)
node.addFirst(2)
node.addFirst(3)
node.addLast(4)
node.addLast(5)
node.addLast(6)
node.getDataByIndex(4)
console.log('#####')
node.addAtIndex(7,2)
node.deleteAtIndex(3)
node.getAllData()
console.log('#####')
console.log(node);