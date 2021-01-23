/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let res = []
  candidates.sort((a,b)=>a-b)
  let dfs = (sum,arr,start)=>{
      if(sum===target){
          res.push(arr.slice(0))
      }
      for(let i=start;i<candidates.length;i++){
          if(sum+candidates[i]>target) continue;
          if(start<=i-1&&candidates[i]===candidates[i-1]) continue;
          arr.push(candidates[i])
          dfs(sum+candidates[i],arr,i+1)
          arr.pop()
      }
  }
  dfs(0,[],0)
  return res;
};