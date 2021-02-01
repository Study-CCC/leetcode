/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let res = 0;
  for(let i=0;i<32;i++){
      let cur = n&1
      res<<=1
      res|=cur;
      n>>=1
  }
  // 第32位为1时，值为负数，需要使用>>>0进行无符号右移
  return res>>>0;
};