/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let left = 0;
  let arr = new Array(26).fill(0)
  for(let str of s1){
      let index = str.charCodeAt()-97;
      arr[index]--;
  }
  for(let i=0;i<s2.length;i++){
      let index = s2[i].charCodeAt()-97;
      arr[index]++;
      while(arr[index]>0){
          arr[s2[left].charCodeAt()-97]--;
          left++;
      }
      if(i-left+1===s1.length) return true;
  }
  return false;
};