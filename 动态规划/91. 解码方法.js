/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if(s[0]==0) return 0;
  let cur = prev = 1;
  for(let i=1;i<s.length;i++){
      let temp = cur
      if(s[i]==0){
          if(s[i-1]==1||s[i-1]==2) cur = prev;
          else return 0;
      }else{
          if(s[i-1]==1||(s[i-1]==2&&s[i]>0&&7>s[i])){
              cur = cur + prev;
          }
      }
      prev = temp
  }
  return cur;
};