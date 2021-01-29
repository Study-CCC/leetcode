/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
  let map = new Map()
  let res = 0;
  let sum = 0;
  map.set(0,1)
  for(let i of A){
      sum += i;
      if(map.has(sum-S)){
          res+=map.get(sum-S)
      }
      map.set(sum,map.has(sum)?map.get(sum)+1:1)
  }
  return res;
};

/**
 * 哈希表
 */


 /**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
  let most = (arr,sum)=>{
      if(sum<0) return 0;
      let left = 0,res = 0;
      for(let i=0;i<arr.length;i++){
          sum -= arr[i]
          while(sum<0){
              sum+=arr[left]
              left++;
          }
          res+=i-left+1
      }
      return res;
  }
  return most(A,S)-most(A,S-1)
};


 /**
  * https://leetcode-cn.com/problems/unique-substrings-in-wraparound-string/solution/xi-fa-dai-ni-xue-suan-fa-yi-ci-gao-ding-qian-zhui-/
  * 前缀和
  */