/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  if(amount===0) return 1;
  let arr = new Array(amount+1).fill(0)
  arr[0]=1;
  for(let i=0;i<coins.length;i++){
      for(let j=1;j<=amount;j++){
          if(j>=coins[i]){
          arr[j] += arr[j-coins[i]]
          }
      }
  }
  return arr[amount]
};
/**
 * 动态规划
 * 
 */