function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

console.log(fibonacciIterative(4));

function fibonacciRecursion(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursion(n - 2) + fibonacciRecursion(n - 1);
}

console.log(fibonacciRecursion(4));

// Reverse String
function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

console.log(reverseString("yoyo master"));

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringRecursive("yoyo master"));
