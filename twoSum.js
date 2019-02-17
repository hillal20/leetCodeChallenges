/**
 *
 * find the indexes of the two numbers equal to 9
 */

// finding the last 2 indexes
let twoSum1 = function(nums, target) {
  let result;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === 9) {
        result = [i, j];
      }
    }
  }

  return result;
};
console.log(twoSum1([2, 7, 11, 4, 5, 15], 9));

// finding the first 2 indexes
let twoSum2 = function(nums, target) {
  let result;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === 9) {
        return (result = [i, j]);
      }
    }
  }
};
console.log(twoSum2([2, 7, 11, 4, 5, 15], 9));

// finding all 2 indexes
let twoSum3 = function(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === 9) {
        result.push([i, j]);
      }
    }
  }

  return [...result];
};
console.log(twoSum3([2, 7, 11, 4, 5, 15], 9));
