/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let single = 0
  for(let i=0;i<nums.length;i++){
      single ^= nums[i]
  }
  return single
};

/**
 * 任何数与本身异或都是0
 * 任何数与0异或都是本身
 * a^b^c=c^a^b 满足分配律
 */