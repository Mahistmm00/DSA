//Remove duplicates from an array

// Method 1: Using indexOf
const removeDuplicatesWay1 = (array) => {
  let uniqueArr = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueArr.indexOf(array[i]) === -1) {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
};

const removeDuplicatesWithNestedLoop = (array) => {
  let uniqueArr = [];
  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (array[i] === uniqueArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
};

const removeDuplicatesWithTemp = (array) => {
  let uniqueArr = [];
  let temp = new Array(Math.max(...array) + 1).fill(false);

  for (let i = 0; i < array.length; i++) {
    if (!temp[array[i]]) {
      temp[array[i]] = true;
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
};

// Method 2: Using Set
const removeDuplicatesWay2 = (array) => {
  return [...new Set(array)];
};

// Method 3: Using filter
const removeDuplicatesWay3 = (array) => {
  return array.filter((item, index) => array.indexOf(item) === index);
};

// Method 4: Using reduce
const removeDuplicatesWay4 = (array) => {
  return array.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);
};

// Method 5: Using Map
const removeDuplicatesWay5 = (array) => {
  const map = new Map();
  array.forEach((item) => map.set(item, true));
  return [...map.keys()];
};

// Test the functions
const array = [1, 2, 1, 3, 4, 2, 2, 1, 5, 6];
console.log("Method 1:", removeDuplicatesWay1(array));
console.log("Method 2:", removeDuplicatesWay2(array));
console.log("Method 3:", removeDuplicatesWay3(array));
console.log("Method 4:", removeDuplicatesWay4(array));
console.log("Method 5:", removeDuplicatesWay5(array));
