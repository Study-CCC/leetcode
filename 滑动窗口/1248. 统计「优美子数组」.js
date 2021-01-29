/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  const most = (sum)=>{
      if(sum<0) return 0;
      let res = 0;
      let left = 0;
      for(let i=0;i<nums.length;i++){
          if(nums[i]%2) sum--;
          while(sum<0){
              if(nums[left]%2) sum++;
              left++;
          }
          res += i - left + 1
      }
      return res;
  }
  return most(k)-most(k-1)
};