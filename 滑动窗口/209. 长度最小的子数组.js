/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if(nums[0]>=s) return 1;
  let start = 0;
  let sum = nums[0];
  let end = Infinity;
  let min = Infinity;
  for(let i=1;i<nums.length;i++){
      sum +=nums[i]
      if(sum>=s){
          while(sum-nums[start]>=s){
              sum-=nums[start]
              start++;
          }
          end = i;
          min = Math.min(min,end-start+1)
      }
  }
  return min===Infinity?0:min;
};