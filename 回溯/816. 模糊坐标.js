/**
 * @param {string} S
 * @return {string[]}
 */
var ambiguousCoordinates = function(S) {
  let res = []
  let str = S.slice(1,S.length-1)
  let len = str.length
  const cut = (str)=>{
      let strArr = []
      for(let i=0;i<str.length;i++){
          if(i==0){
              if(str[0]==0&&str.length>1) continue;
              strArr.push(str)
          }else if(i==1){
              if(str[str.length-1]==0) break;
              strArr.push(`${str.slice(0,1)}.${str.slice(1,str.length)}`)
          }else if(i>1){
              if(str[0]==0||str[str.length-1]==0) break;
               strArr.push(`${str.slice(0,i)}.${str.slice(i,str.length)}`)
          }
      }
      return strArr;
  }
  for(let i=1;i<str.length;i++){
      let x = cut(str.slice(0,i))
      let y = cut(str.slice(i,str.length))
      for(let m=0;m<x.length;m++){
          for(let n=0;n<y.length;n++){
              res.push(`(${x[m]}, ${y[n]})`)
          }
      }
  }
  return res;
};
/**
 * 笛卡尔积
 */