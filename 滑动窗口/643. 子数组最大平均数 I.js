/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let left = 0;
  let max = -Infinity;
  let sum = 0;
  for(let i=0;i<nums.length;i++){
      if(i-left<k-1){
          sum += nums[i]
      }else{
          sum += nums[i]
         max = Math.max(max,sum)
         sum -= nums[left]
         left++;
      }
  }
  return max/k;
};