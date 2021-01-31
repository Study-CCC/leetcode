/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let res = 0;
  let a = 0;
  let b = 0;
  for(let num of nums){
      res ^= num;
  }
  // 获取最低位值为1的数
  let min = res & (-res)
  for(let num of nums){
      // 分治法，同于a和b必有某一位不同
      // 该位为0的分为一组，该位为1的分为一组就将a和b分开了
      // 此时又是在一堆出现2次的元素里找一个
      if(num&min){
          a^= num
      }else{
          b^=num
      }
  }
  return [a,b]
};