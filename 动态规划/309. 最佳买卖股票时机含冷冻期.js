/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length===0) return 0;
   let arr = [[-prices[0],0,0]]
   for(let i=1;i<prices.length;i++){
       arr[i] = []
       arr[i][0]=Math.max(arr[i-1][0],arr[i-1][2]-prices[i])
       arr[i][1]=arr[i-1][0]+prices[i]
       arr[i][2]=Math.max(arr[i-1][1],arr[i-1][2])
   } 
   return Math.max(arr[prices.length-1][1],arr[prices.length-1][2])
};

/**
 * 动态规划
 * 0: 持有状态
 * 1: 冷冻状态
 * 2: 未持有未冷冻
 */