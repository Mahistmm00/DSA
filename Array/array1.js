const strings = ["a", "b", "c", "d"];
//4*4 = 16 bytes of storage

strings[2] = "z"; //O(1) - constant time

strings.push("e"); //O(1) - constant time

strings.pop(); //O(1) - constant time

strings.unshift("x"); //O(n) - linear time
strings.splice(2, 0, "alien"); //O(n) - linear time

console.log(strings);
//O(n) - linear time

//Big O of Arrays
//Access - O(1)
//Search - O(n)
//Insertion - O(n)
//Deletion - O(n)
//Copying - O(n)
//Iteration - O(n)
//Sorting - O(n log n)
//Concatenation - O(n)
//Slicing - O(n)
//Splicing - O(n)
//Reversing - O(n)
//Joining - O(n)
//Filtering - O(n)
//Mapping - O(n)
//Reducing - O(n)
//Finding - O(n)
//Includes - O(n)
