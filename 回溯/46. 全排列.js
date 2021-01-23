/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = []
  let dfs = (arr)=>{
      if(arr.length===nums.length){
          res.push(arr.slice(0))
          return;
      }
      for(let i=0;i<nums.length;i++){
          if(arr.indexOf(nums[i])>-1) continue;
          arr.push(nums[i])
          dfs(arr)
          arr.pop()
      }
  }
  dfs([])
  return res;
};