/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
  if(arr.length===1) return 1;
  let arrSymbol = []
  for(let i=1;i<arr.length;i++){
      if(arr[i]>arr[i-1]) arrSymbol.push(1)
      else if(arr[i]<arr[i-1]) arrSymbol.push(-1)
      else arrSymbol.push(0)
  }
  let count = arrSymbol[0]===0?1:2;
  let max = count;
  for(let i=1;i<arrSymbol.length;i++){
      if(arrSymbol[i]===0){
          count = 1;
      }else if(arrSymbol[i]===-arrSymbol[i-1]){
          count++;
      }else{
          count = 2;
      }
      max = Math.max(max,count)
  }
  return max;
};