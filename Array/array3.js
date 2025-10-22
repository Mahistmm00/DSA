function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "The input is not correct";
  }

  const reverseArray = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    reverseArray.push(str[i]);
  }
  return reverseArray.join("");
}

function reverse1(str) {
  return str.split("").reverse().join("");
}

const reverse2 = (str) => str.split("").reverse().join("");

const reverse3 = (str) => [...str].reverse().join("");

console.log(reverse("Mahendran"));
console.log(reverse1("Mahendran"));
console.log(reverse2("Mahendran"));
console.log(reverse3("Mahendran"));
