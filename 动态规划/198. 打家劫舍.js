/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length===0) return 0;
  if(nums.length===1) return nums[0];
  if(nums.length===2) return Math.max(nums[0],nums[1])
  let db = [nums[0], Math.max(nums[0],nums[1])]
  for(let i=2;i<nums.length;i++){
      db[i] = Math.max(db[i-2]+nums[i],db[i-1])
  }
  return db[nums.length-1]
};
/**
 * 动态规划+滑动数组
 */