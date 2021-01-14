/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length===1) return 0;
  let buyOne = -prices[0];
  let buyTwo = -prices[0];
  let sellOne = 0;
  let sellTwo = 0;
  for(let i=1;i<prices.length;i++){
      sellTwo = Math.max(sellTwo,buyTwo+prices[i])
      buyTwo = Math.max(buyTwo,sellOne-prices[i])
      sellOne = Math.max(sellOne,buyOne+prices[i])
      buyOne = Math.max(buyOne,-prices[i])
  }
  return Math.max(sellTwo,sellOne,0)
};
/**
 * 动态规划
 */