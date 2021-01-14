/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  if(s.length===0) return s;
  let res = [];
  let arr = [];
  let dfs = (s)=>{
      if(s.length===0){
          res.push(arr.slice(0))
          return;
      }
      for(let i=1;i<=s.length;i++){
         if(isPart(s.slice(0,i))){
             arr.push(s.slice(0,i))
             dfs(s.slice(i,s.length))
             arr.pop()
         }
      }
  }
  let isPart = (s)=>{
      if(s.length===1) return true;
      for(let i=0;i<Math.floor(s.length/2);i++){
          if(s[i]!==s[s.length-1-i]){
              return false;
          }
      }
      return true;
  }
  dfs(s)
  return res
};
/**
 * 回溯
 */