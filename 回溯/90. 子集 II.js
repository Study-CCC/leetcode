/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let res = []
  let dfs = (start,arr)=>{
      res.push(arr.slice())
      for(let i=start;i<nums.length;i++){
          if(i>start&&nums[i]===nums[i-1]) continue;
          arr.push(nums[i])
          dfs(i+1,arr)
          arr.pop()
      }
  }
  nums.sort((a,b)=>a-b)
  dfs(0,[])
  return res;
};