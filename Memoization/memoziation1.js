function addTo80(n) {
  return 80 + n;
}

console.log(addTo80(5));

function memoziedAddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("first time");
      cache[n] = 80 + n;
      return cache[n];
    }
  };
}

const memozied = memoziedAddTo80();

console.log("1", memozied(5));
console.log("2", memozied(5));
