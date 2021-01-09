/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if(amount===0) return 0;
  let arr = new Array(amount+1).fill(Infinity)
  arr[0] = 0
  for(let i=0;i<=amount;i++){
      for(let j=0;j<coins.length;j++){
          if(i-coins[j]>=0){
          arr[i] = Math.min(arr[i],arr[i-coins[j]]+1)
          }
      }
  }
  return arr[amount]===Infinity?-1:arr[amount]
};
/**
 * 动态规划
 */