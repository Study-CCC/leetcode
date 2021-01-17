/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
  let maxLen = new Array(n+1).fill(0)
  for(let i=0;i<ranges.length;i++){
      let start = i-ranges[i]<0?0:i-ranges[i];
      let end = i+ranges[i]
      maxLen[start] = Math.max(maxLen[start],end)
  }
  let count = 0;
  let pre = 0;
  let last = 0;
  for(let i=0;i<n;i++){
      last = Math.max(last,maxLen[i])
      if(i === last) return -1;
      if(i === pre){
          count++;
          pre = last;
      }
  }
  return count;
};