var longestPalindrome = function(s) {
  /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length===1) return s;
  let arr = new Array(s.length).fill(0).map(item=>new Array(s.length))
  let resStr = ''
  // l为长度
  for(let l=0;l<s.length;l++){
      for(let i=0;i<s.length;i++){
          let j = i+l;
          if(l===0){
              arr[i][j]= true;
          }else if(l===1){
              arr[i][j] = s[i]===s[j]
          }else{
              arr[i][j] = s[i]===s[j]&&arr[i+1][j-1]
          }
          if(l>=resStr.length&&arr[i][j]){
              resStr = s.slice(i,j+1)
          }
      }
  }
  return resStr
};
};
/**
 * 动态规划
 */
