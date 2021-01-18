/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  let list = new Set()
  let res = []
  let quene = []
  list.add(s)
  quene.push(s)
  while(quene.length){
      let str = quene.shift()
      if(isValid(str)){
          res.push(str)
      }else if(res.length===0){
          for(let i=0;i<str.length;i++){
              if(str[i]==='('||str[i]===')'){
              let newStr = str.slice(0,i)+str.slice(i+1,str.length)
              if(!list.has(newStr)){
                  list.add(newStr)
                  quene.push(newStr)
              }
              }
          }
      }
  }
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
/**
 * DFS
 */