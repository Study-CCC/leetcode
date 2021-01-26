/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  let count  = 0;
  let arr = new Array(100).fill(0)
  for(let [a,b] of dominoes){
     let num = a>b?a*10+b:b*10+a;
     count += arr[num]
     arr[num]++;
  }
  return count;
};