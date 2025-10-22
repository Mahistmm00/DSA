class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      const secondNode = this.first.next;
      this.first = secondNode;
    }
    this.length--;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("May");
myQueue.enqueue("Pavel");
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);

//Joy
//Matt
//Pavel
//Samir
