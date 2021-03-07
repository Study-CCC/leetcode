// 方法1: 暴力法
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let arr = []
  for(let i = 0 ; i < nums.length ; i++){
      let r = i===nums.length-1? 0 : i + 1;
      while(r!==i){
          if(nums[r]>nums[i]){
              arr.push(nums[r]);
              break;
          }else{
              if(r<nums.length-1){
                  r++;
              }else{
                  r = 0;
              }
          }
      }
      if(r===i) arr.push(-1)
  }
  return arr;
};

/**
 * 单调栈
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  if(nums.length===0) return []
  let arr = [0]
  let res = new Array(nums.length).fill(-1)
  for(let i=1;i<nums.length*2-1;i++){
      while(nums[arr[arr.length-1]]<nums[i%nums.length]){
          res[arr.pop()] = nums[i%nums.length]
      }
          arr.push(i%nums.length)
  }
  return res;
};