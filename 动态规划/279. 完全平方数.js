/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let arr = new Array(n+1).fill(0);
  for(let i = 1;i<=n;i++){
      arr[i] = i
      for(let j = 1;i-j*j>=0;j++){
          arr[i] = Math.min(arr[i],arr[i-j*j]+1)
      }
  }
  return arr[n]
};

/**
 * 动态规划
 * 时间复杂度 O(n^3/2)
 * 空间复杂度 O(n)
 */