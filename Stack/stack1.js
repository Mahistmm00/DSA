class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peak() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let higlightPointer = this.top;
      this.top = newNode;
      this.top.next = higlightPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

class Stack2 {
  constructor() {
    this.array = [];
  }
}

class Stack2 {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
  }
  pop() {
    this.array.pop();
  }
}

const myStack2 = new Stack2();
myStack2.push("Google");
myStack2.push("udemy");
console.log(myStack2.peek());

myStack2.pop();
console.log(myStack2);

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
console.log(myStack);
