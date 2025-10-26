var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  while (nums.length > 1) {
    a = nums.shift();
    b = nums.shift();
    if (a !== b) return a;
  }

  return nums[0];
};

//

var maxDepth = function (root) {
  if (!root) return 0;
  let queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }

  return depth;
};
