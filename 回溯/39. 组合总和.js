/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = []
  let dfs = (sum,arr,start)=>{
      if(sum===target){
          res.push(arr.slice(0))
      }
      for(let i=start;i<candidates.length;i++){
          if(sum+candidates[i]>target) continue;
          arr.push(candidates[i]);
          dfs(sum+candidates[i],arr,i)
          arr.pop()
      }
  }
  dfs(0,[],0)
  return res;
};