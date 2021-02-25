/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  for(let i=0;i<A.length;i++){
      for(let j=0;j<Math.floor((A.length+1)/2);j++){
         [A[i][j], A[i][A.length - 1 - j]] = [1 ^ A[i][A.length - 1 - j], 1 ^ A[i][j]];
      }
  }
  return A;
};