/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  let max = 0;
  let sum = 0
  let left = cardPoints.length;
  for(let i=0;i<k;i++){
      max+=cardPoints[i]
  }
  sum = max
  for(let i=k-1;i>=0;i--){
      left--;
      sum = sum-cardPoints[i]+cardPoints[left]
      max = Math.max(max,sum)
  }
  return max
};
