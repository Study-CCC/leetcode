/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  let max = 0;
  let ans = A[0]
  for(let i=1;i<A.length;i++){
      max = Math.max(max,ans+A[i]-i)
      ans = Math.max(ans,A[i]+ i)
  }
  return max
};
/**
 * 动态维护最大值
 */