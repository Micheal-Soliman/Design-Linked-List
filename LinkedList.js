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
    deleteByVal(val){
        let dummy = new Node (null,this.head)
        let previous = dummy 
        let current = this.head
        while(current){
            if (current.data == val) {
                previous.next = current.next
                current = current.next
                this.size--
            } else {
                previous = current
                current = current.next
            }
        }
        this.head = dummy.next
    }
    removeDuplicatesfromSortedList(){
        let dummy = new Node (null,this.head)
        let previous = dummy
        let current = this.head
        while (current) {
            if (previous.data == current.data) {
                previous.next = current.next
                current = current.next
                this.size--
            } else {
                previous = current
                current = current.next
            }
        }
        this.head = dummy.next
    }
    reverseLinkedList(){
        let previous = null
        let current = this.head
        let next
        while (current) {
            next = current.next
            current.next = previous
            previous = current
            current = next
        }
        this.head = previous
    }
    middleOfLinkedList(){
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
            this.size--
        }
        this.head = slow
    }
}

let node = new Linkedlist()


node.addLast(1) 
node.addLast(2) 
node.addLast(3) 
node.addLast(4)
node.addLast(5) 
node.addLast(6)

console.log(node);