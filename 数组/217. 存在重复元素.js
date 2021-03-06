/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b)
  for(var i = 1; i < nums.length; i++) 
      if (nums[i] === nums[i - 1]) return true
  return false
};
/**
 * 排序
 */

var containsDuplicate = function(nums) {
  let len = new Set(nums).size
  return len!==nums.length
};
/**
 * set
 */