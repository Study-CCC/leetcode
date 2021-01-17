/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0
  let xLen = grid.length
  let yLen = grid[0].length
  let dfs = (x,y)=>{
    if (x < 0 || x >= xLen || y < 0 || y >= yLen) return;
    if (grid[x][y] == 1) {
    grid[x][y]=0
    dfs(x, y - 1)
    dfs(x, y + 1)
    dfs(x - 1, y)
    dfs(x + 1, y)
    }
  }
  for(let i=0;i<xLen;i++){
      for(let j=0;j<yLen;j++){
          if(grid[i][j]==1){
              count++;
              dfs(i,j)
          }
      }
  }
  return count
};
/**
 * 将dfs遍历到的1转化为0
 */