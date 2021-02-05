/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
  let arr = new Array(s.length).fill(0)
  let max = 0;
  let sum = 0;
  let left = 0
  for(let i=0;i<s.length;i++){
      arr[i] = Math.abs(s[i].charCodeAt()-t[i].charCodeAt())
  }
  for(let i=0;i<arr.length;i++){
     sum += arr[i]
     while(sum>maxCost){
         sum -= arr[left]
         left++;
     }
      max = Math.max(max,i-left+1)
  }
  return max;
};