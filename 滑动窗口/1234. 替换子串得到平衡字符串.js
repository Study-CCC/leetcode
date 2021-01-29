/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
  let total = s.length/4;
  let sum = Infinity;
  let obj = {
      'Q':0,
      'W':0,
      'E':0,
      'R':0
  }
  let need = {}
  let left = 0;
  let count = 0;
  for(let i=0;i<s.length;i++){
      obj[s[i]]++;
  }
  for(let i in obj){
      if(obj[i]>total) {
          obj[i] = obj[i] - total;
          need[i] = obj[i]
          count+=obj[i]
          }
      else obj[i] = 0;
  }
  if(count>0){
  for(let i=0;i<s.length;i++){
      if(need[s[i]]!==undefined){
          need[s[i]]--;
          if(need[s[i]]>=0) count--;
      }
      while(count===0){
          let cur = s[left]
          if(need[cur]!==undefined){
              if(need[cur]===0){
              count++;
              }
            need[cur]++;
          }
          sum = Math.min(sum,i-left+1)
          left++;
      }
  }
  }
  return sum===Infinity?0:sum;
};