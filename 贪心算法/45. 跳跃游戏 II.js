/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if(nums.length===1) return 0;
  let count = 0;
  let end = 0;
  let maxLen = 0;
  // 当恰好到最后一个的时候不需要再加了，所以这里的length是nums.length-1
  for(let i =0;i<nums.length-1;i++){
      maxLen = Math.max(maxLen,i+nums[i])
      if(i===end){
          count++;
          end = maxLen;
      }
  }
  return count
};
/**
 * 
 */