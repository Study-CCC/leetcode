// 1. 动态规划
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  if(envelopes.length===0) return 0;
  envelopes.sort((a,b)=>a[0]-b[0])
  let arr = new Array(envelopes.length).fill(1)
  let max = 1;
  for(let i=0;i<envelopes.length;i++){
      for(let j=i-1;j>=0;j--){
          if(envelopes[i][0]===envelopes[j][0]){
              if(envelopes[i][1]>envelopes[j][1]){
                  arr[i] = Math.max(arr[i],arr[j])
              }
          }else if(envelopes[i][1]>envelopes[j][1]){
              arr[i] = Math.max(arr[i],arr[j]+1)
          }
      }
      max = Math.max(arr[i],max)
  }
  return max;
};

// 2. 二分查找 + 动态规划
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  if (envelopes.length === 0) {
      return 0;
  }
  
  const n = envelopes.length;
  envelopes.sort((e1, e2) => {
      if (e1[0] - e2[0]) {
          return e1[0] - e2[0];
      } else {
          return e2[1] - e1[1];
      }
  })

  const f = [envelopes[0][1]];
  for (let i = 1; i < n; ++i) {
      const num = envelopes[i][1];
      if (num > f[f.length - 1]) {
          f.push(num);
      } else {
          const index = binarySearch(f, num);
          f[index] = num;
      }
  }
  return f.length;
}

const binarySearch = (f, target) => {
  let low = 0, high = f.length - 1;
  while (low < high) {
      const mid = low + high >> 1
      if (f[mid] < target) {
          low = mid + 1;
      } else {
          high = mid;
      }
  }
  return low;
};