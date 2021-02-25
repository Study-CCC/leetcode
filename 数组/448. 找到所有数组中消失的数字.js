/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let arr = []
 for(let i=0;i<nums.length;i++){
    let val = Math.abs(nums[i])-1
    nums[val] = -Math.abs(nums[val])
 } 
 for(let i=0;i<nums.length;i++){
     if(nums[i]>0){
         arr.push(i+1)
     }
 }
 return arr
};