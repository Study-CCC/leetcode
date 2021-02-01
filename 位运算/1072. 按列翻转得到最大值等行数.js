/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
  let max = 1;
  let map = new Map()
  let len = matrix[0].length
  for(let i of matrix){
      let p = i[0]^1
      let temp = ''
      for(let j=0;j<len;j++){
          temp += i[j]^p
      }
      if(map.has(temp)){
          let count = map.get(temp)
          map.set(temp,count+1)
          max = Math.max(count+1,max)
      }else{
          map.set(temp,1)
      }
  }
  return max
};
/**
 * 将第一位为0的进行转化
 * 通过map去记录
 */