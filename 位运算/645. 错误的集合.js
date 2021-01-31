/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let arr = []
  for(let i=0;i<nums.length;i++){
      if(nums[Math.abs(nums[i])-1]<0) arr.push(Math.abs(nums[i]));
      else nums[Math.abs(nums[i])-1] *= -1
  }
  for(let i=0;i<nums.length;i++){
      if(nums[i]>0) {
          arr.push(i+1);
          break;
      }
  }
  return arr;
};
/**
 * 将第一次访问的数反转为负数，第二次遇到就可以发现重复的数
 * 当所有数反转为负数，没反转的就为缺失的
 */