/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if(nums.length===0) return nums
  if(nums.length===1) return [`${nums[0]}`]
  let cur = 0
  let res = []
  for(let i=1;i<nums.length;i++){
      if(nums[i-1]+1!==nums[i]){
          cur===i-1?res.push(`${nums[cur]}`):res.push(`${nums[cur]}->${nums[i-1]}`)
          cur = i;
      }else if(i===nums.length-1){
          res.push(`${nums[cur]}->${nums[i]}`)
      }
      if(cur===nums.length-1) res.push(`${nums[cur]}`)
  }
  return res;
};

/**
 * 遍历
 */