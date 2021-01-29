/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let count = 0;
  let left = 0;
  let sum = 0;
  for(let i=0;i<A.length;i++){
      if(A[i]===0) count++;
      while(count>K){
          if(A[left]===0) count--;
          left++;
      }
      sum = Math.max(sum,i-left+1)
  }
  return sum;
};