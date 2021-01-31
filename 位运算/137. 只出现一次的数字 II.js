/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let binaryCount = new Array(32).fill(0)
  let num = 0;
  for(let i=0;i<nums.length;i++){
      for(let j=0;j<32;j++){
          if(!nums[i]) break;
           binaryCount[j]+=nums[i]&1;
           nums[i]>>=1
      }
  }
  for(let i=0;i<32;i++){
      num<<=1
      num|=binaryCount[31-i]%3
  }
  return num
};
/**
 * 对每个二进制位数进行计算，最后结果除以3除余就是结果
 */