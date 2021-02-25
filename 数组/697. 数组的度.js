/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let map = new Map()
  let max = 0;
  let first = 0;
  let end = 0;
  for(let i=0;i<nums.length;i++){
      if(map.has(nums[i])){
          let num = map.get(nums[i])
          num.count++;
          if(num.count===max&&i-num.first<end-first){
              max = num.count
              first = num.first
              end = i;
          }else if(num.count>max){
              max = num.count
              first = num.first
              end = i;
          }
          map.set(nums[i],num)
      }else{
          map.set(nums[i],{
              count: 1,
              first: i
          })
      }
  }
  return end - first + 1;
};