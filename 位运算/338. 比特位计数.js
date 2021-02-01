/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let arr = [0]
  for(let i=1;i<=num;i++){
      if(i&1){
          arr[i] = arr[i-1] + 1
      }else{
          arr[i] = arr[i/2]
      }
  }
  return arr
};
/**
 * 奇数一定比前一位多1位
 * 偶数值为该偶数除以2
 */