/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let res = []
  let dfs = (arr)=>{
      if(arr.length===n){
          res.push(arr.map(item=>{
              let str = ''
              for(let i=0;i<n;i++){
                  if(i===item) {
                      str+='Q';
                      continue;
                  };
                  str+='.'
              }
              return str;
          }))
      }
      for(let i=0;i<n;i++){
          let flag = false;
          for(let j=0;j<arr.length;j++){
              if(i===arr[j]||Math.abs(i-arr[j])===Math.abs(j-arr.length)){
                  flag = true;
                  break;
              }
          }
          if(flag) continue;
          arr.push(i)
          dfs(arr)
          arr.pop()
      }
  }
  dfs([])
  return res;
};