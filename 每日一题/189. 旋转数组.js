/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let len = nums.length
  for(let i=1;i<=k;i++ ){
      let n = nums.pop()
      nums.unshift(n)
  }
  return nums;
};