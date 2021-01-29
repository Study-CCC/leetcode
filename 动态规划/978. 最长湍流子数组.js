/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
  if(arr.length===1) return 1;
  let max = 0;
 let dp = [1,1]
  for(let i=1;i<arr.length;i++){
      let dp0 = dp[0]
      let dp1 = dp[1]
      if(arr[i]>arr[i-1]) dp = [dp1 + 1,1]
      else if(arr[i]<arr[i-1]) dp = [1,dp0 + 1]
      else dp = [1,1]
      max = Math.max(max,dp[0],dp[1])
  }
  return max;
};