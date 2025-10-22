class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItem(index);
  }

  shiftItem(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new myArray();
newArray.push("hi");
newArray.push("you");
newArray.push("!");
newArray.delete(2);
console.log(newArray);

function myArray1() {
  let data = {};
  let length = 0;

  return {
    get: (index) => data[index],
    push: (item) => {
      data[length] = item;
      length++;
      return length;
    },
    pop: () => {
      const lastItem = data[length - 1];
      delete data[length - 1];
      length--;
      return lastItem;
    },
    length: () => length,
    data: () => data,
  };
}

const newArray1 = myArray1();
console.log(newArray1.push("hi"));

newArray1.push("you");
// console.log({ length: newArray1.length(), data: newArray1.data() });
