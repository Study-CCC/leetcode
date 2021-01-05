/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  let curStr = s[0];
  let count = 1;
  let res = [];
  for(let i=1;i<s.length;i++){
      if(s[i]===curStr){
          count++;
          if(i===s.length-1&&count>=3){
              res.push([i-count+1,i])
          }
      }else{
          if(count>=3){
              res.push([i-count,i-1])
          }
           count = 1;
          curStr = s[i]
      }
  }
  return res
};