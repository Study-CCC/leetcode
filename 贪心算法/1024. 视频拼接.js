/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
  let dp = new Array(T+1).fill(Infinity)
  dp[0]=0
  for(let i=0;i<=T;i++){
      for(let j=0;j<clips.length;j++){
          if(clips[j][0]<=i&&i<=clips[j][1]){
              dp[i] = Math.min(dp[i],dp[clips[j][0]]+1)
          }
      }
  }
  return dp[T]===Infinity?-1:dp[T]
};
/**
 * 动态规划
 */

 /**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
  let maxEnd = new Array(T+1).fill(0)
  for(let i = 0;i<clips.length;i++){
      let start = clips[i][0]
      let end = clips[i][1]
      maxEnd[start] = Math.max(maxEnd[start],end)
  }
  let pre = 0;
  let count =0;
  let last = 0;
  for(let i = 0;i<T;i++){
      last = Math.max(last,maxEnd[i])
      if(i===last){
          return -1;
      }
      if(i===pre){
          pre = last;
          count++;
      }
  }
  return count;
};

/**
 * 贪心算法
 */