/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  for(let i = 0 ; i < nums.length ; i++){
      if(nums[i]!==i){
          if(nums[nums[i]]===nums[i]) return nums[i];
          else {
              let temp = nums[i]
              nums[i] = nums[temp]
              nums[temp] = temp 
          }
      }
  }
};