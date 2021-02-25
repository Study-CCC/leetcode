/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  let min = nums[0];
  let max = nums[0];
  let maxCount = 0;
  let left = 0;
  for(let i=0;i<nums.length;i++){
      max = Math.max(max,nums[i])
      min = Math.min(min,nums[i])
      if(max-min<=limit){
          maxCount = Math.max(maxCount,i-left+1)
      }else{
          let curLeft = left
          max = nums[i]
          min = nums[i]
          for(let j=i;j>=curLeft;j--){
            if(Math.abs(max-nums[j])>limit||Math.abs(min-nums[j])>limit){
                break;
            }else{
                max = Math.max(max,nums[j])
                min = Math.min(min,nums[j])
                left = j;
            }
          }   
      }
  }
  return maxCount;
};