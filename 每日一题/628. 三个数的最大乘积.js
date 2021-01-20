/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let max = -Infinity,secMax = -Infinity,thirdMax= -Infinity,
      min = Infinity,secMin = Infinity;
      for(let i=0;i<nums.length;i++){
         if(nums[i]<min){
             secMin = min
              min = nums[i]
         }else if(nums[i]<secMin){
             secMin = nums[i]
         }
         if(nums[i]>max){
             thirdMax = secMax
             secMax = max
             max = nums[i]   
         }else if(nums[i]>secMax){
             thirdMax = secMax
             secMax = nums[i]
         }else if(nums[i]>thirdMax){
             thirdMax = nums[i]
         }
      }
      return Math.max(max*min*secMin,max*secMax*thirdMax)
};