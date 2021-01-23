/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let res = []
  let use = []
  let dfs = (arr)=>{
      if(arr.length===nums.length){
          res.push(arr.slice(0))
          return;
      }
      for(let i=0;i<nums.length;i++){
         if(use[i]||(i>0&&nums[i]===nums[i-1]&&!use[i-1]))continue;
         use[i]=true;
         arr.push(nums[i])
         dfs(arr)
         arr.pop()
         use[i]=false
      }
  }
 nums.sort((a,b)=>a-b)
 dfs([])
 return res
};