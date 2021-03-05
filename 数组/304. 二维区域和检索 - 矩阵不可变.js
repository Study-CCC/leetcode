/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.sumArr = matrix
  for(let i=0;i<matrix.length;i++){
      let sum = 0;
      for(let j=0;j<matrix[0].length;j++){
          sum += matrix[i][j]
          this.sumArr[i][j] = sum;
      }
  }
  console.log(this.sumArr)
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let res = 0;
  for(let i=row1;i<=row2;i++){
      if(col1===0){
          res += this.sumArr[i][col2]
      }else{
          res += this.sumArr[i][col2] - this.sumArr[i][col1-1]
      }
  }
  return res;
};

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/