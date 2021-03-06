/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = []
  let dfs = (start,arr)=>{
      res.push(arr.slice())
      for(let i=start;i<nums.length;i++){
          if(arr[arr.length-1]>=nums[i]) continue;
          arr.push(nums[i])
          dfs(start+1,arr)
          arr.pop()
      }
  }
  nums.sort((a,b)=>a-b)
  dfs(0,[])
  return res;
};