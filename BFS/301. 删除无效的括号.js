/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  let list = new Set()
  let res = []
  let dfs = (str)=>{
      if(res.length>0&&str.length<res[0].length){
          return;
      }
      if(!list.has(str)){
      if(isValid(str)){
          list.add(str)
         if(res.length>0){
             if(str.length>res[0].length){
                 res = [str]
             }else if(str.length===res[0].length){
                 res.push(str)
             }
         }else res.push(str)
      }else{
          list.add(str)
          for(let i = 0;i<str.length;i++){
              dfs(str.slice(0,i)+str.slice(i+1,str.length))
          }
      }
      }
  }
  dfs(s)
  return res;
};
var isValid = function(s) {
 let count = 0;
 for(let i=0;i<s.length;i++){
     if(s[i]==='(') count++;
     if(s[i]===')') count--;
     if(count<0) return false;
 }
  return !count;
};