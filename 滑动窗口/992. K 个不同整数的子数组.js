/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
  let most = (sum)=>{
      if(sum<0) return 0;
      let res=left=0;
      let count = 0;
      let map = {};
      for(let i=0;i<A.length;i++){
          if(!map[A[i]]){
              count++;
              map[A[i]] = 1;
          }else{
              map[A[i]]++;
          }
          while(count>sum){
              let cur = A[left]
              map[cur]--;
              left++;
              if(map[cur]===0) count--;
          }
          res += i - left + 1;
      }
      return res;
  }
  return most(K)-most(K-1)
};