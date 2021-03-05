// 1. 动态规划 + 贪心算法
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let arr = new Array(nums.length).fill(1)
  let max = 1;
  for(let i=nums.length-1;i>=0;i--){
      for(let j=i+1;j<nums.length;j++){
          if(nums[i]<nums[j]){
              arr[i] = Math.max(arr[j]+1,arr[i])
          }
      }
      max = Math.max(max,arr[i])
  }
  return max;
};

// 2. 二分查找
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let arr = [nums[0]]
      for(let i=1;i<nums.length;i++){
          if(nums[i]>arr[arr.length-1]){
              arr.push(nums[i])
          }else{
              let l = 0 , r = arr.length-1
              while(l < r){
              let mid = (l + r) >> 1;
              if(arr[mid] < nums[i]){
                  l = mid + 1;
              }else{
                  r = mid;
              }
          }
          arr[l] = nums[i];
          }
      }
  return arr.length;
};