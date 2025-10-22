//Contains duplicate

var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));

var containsDuplicate = function (nums) {
  let seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));

///Move zero

var moveZeroes = function (nums) {
  let insertPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
};

var moveZeroes2 = function (nums) {
  const zeroArray = [];
  const nonZeroArray = [];
  const newArray = [];

  if (nums.length === 1) {
    return nums;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroArray.push(nums[i]);
    } else {
      nonZeroArray.push(nums[i]);
    }
  }

  return newArray.concat(nonZeroArray, zeroArray);
};

//Maximum subarray

var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};
