/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  let dp = new Array(s.length).fill(1)
  // i向前遍历,j向后遍历
  for(let i=s.length-1;i>=0;i--){
      let prev = 0;
      for(let j=i+1;j<s.length;j++){
        let tmp = dp[j];
          if (s[i] === s[j]) {
              dp[j] = prev + 2
          } else {
              dp[j] = Math.max(dp[j], dp[j-1])
          }
          prev = tmp;
      }
  }
  return dp[s.length-1]
};
/**
 * 降纬处理动态规划
 */