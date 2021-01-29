/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
  let left = 0;
  let right = nums.length;
  let sum = 0;
  let minCount = Infinity;
  while(sum<=x&&left<right){
      sum += nums[left]
      left++;
  }
  if(sum>=x){
  while(left>=0){
      if(sum===x){
          minCount = Math.min(minCount,left+nums.length-right)
          left--;
          sum-=nums[left]
      }
      if(sum<x){
          right--;
          sum+=nums[right]
      }else if(sum>x){
          left--;
          sum-=nums[left]
      }
  }
  }
  return minCount===Infinity?-1:minCount
};