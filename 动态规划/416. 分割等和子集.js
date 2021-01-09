/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  if(nums.length<2) return false; 
  let total = nums.reduce((a,b)=>a+b)
  if(total%2===1) return false;
  total = total/2;
  let arr = new Array(nums.length).fill(0).map(item=>new Array(total).fill(false))
  for(let i=0;i<nums.length;i++){
      arr[i][0] = true;
  }
  arr[0][nums[0]]=true;
  for(let i=1;i<nums.length;i++){
      for(let j=1;j<=total;j++){
          if(j>=nums[i]){
          arr[i][j]=arr[i-1][j]||arr[i-1][j-nums[i]]
              if(j==total&&arr[i][j]){
                  return true;
              }
          }else{
              arr[i][j]=arr[i-1][j]
          }
      }
  }
  return false
};
/**
 * 动态规划
 */

 /**
  * 空间优化
  * 从后往前遍历以防前面改变的数据影响后面的数据
  */

  /**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  if(nums.length<2) return false; 
  let total = nums.reduce((a,b)=>a+b)
  if(total%2===1) return false;
  total = total/2;
  let arr = new Array(total+1).fill(false)
  arr[0]=true;
  arr[nums[0]] = true;
  console.log(arr)
  for(let i=1;i<nums.length;i++){
      for(let j=total;j>=0;j--){
          if(j>=nums[i]){
              arr[j] = arr[j]||arr[j-nums[i]]
              if(arr[total]){
                  return true;
              }
          }
      }
  }
  return false
};