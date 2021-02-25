/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
  let count = 0;
  for(let i=0;i<row.length;i=i+2){
      let s = row[i]^1
      if(row[i+1]!==s){
          for(let j=i+2;j<row.length;j++){
              if(row[j]===s){
                  row[j]=row[i+1]
                  row[i+1]=s
                  count++;
                  break
              }
          }
      }
  }
  return count;
};