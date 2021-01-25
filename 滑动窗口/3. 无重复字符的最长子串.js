/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let start = 0;
  let end = 0;
  let max = 0;
  let arr = []
  for(let i = 0;i < s.length;i++){
      let index = arr.indexOf(s[i])
      if(index>-1){
          arr = arr.slice(index+1,arr.length)
      }
      arr.push(s[i])
      max = Math.max(max,arr.length)
  }
  return max;
};