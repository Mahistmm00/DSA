let counter = 0;

function inception() {
  console.log(counter);
  if (counter > 3) {
    return "Done";
  }
  counter++;
  return inception();
}

inception();

//Identify the base case
//Identify the recursive case
//get closure and closure and return when needed,
//Usually you have two returns

function findFactorialIterative(number) {
  let result = 1;
  if (number === 2) {
    result = 2;
  }
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}

console.log(findFactorialIterative(4)); //O(n)

function findFactorialRecursion(number) {
  console.log("Current number:", number);
  if (number === 2) {
    console.log("Base case reached:", number);
    return number;
  }
  const result = number * findFactorialRecursion(number - 1);
  console.log(`Returning ${result} for number ${number}`);
  return result;
}

console.log("Final Result:", findFactorialRecursion(5)); //O(n)
