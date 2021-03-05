/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  let arr = new Array(2*nums.length+1).fill(-2)
  let count = nums.length;
  let max = 0;
  arr[count] = -1
  for(let i = 0;i<nums.length;i++){
      if(nums[i]===0){
          count--
      }else{
          count++
      }
      if(arr[count]!==-2){
          max = Math.max(max,i-arr[count])
      }else{
          arr[count] = i
      }
  }
  return max;
};