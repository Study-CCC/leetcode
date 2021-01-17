/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let x = grid.length, y = grid[0].length
  let max = 0
  let dfs = (i, j) =>{
          if(i<0 || i>=x || j<0 || j>=y || grid[i][j]==0) return 0    
          let cnt = 1
          grid[i][j] = 0
          cnt += dfs(i+1, j)
          cnt += dfs(i-1, j)
          cnt += dfs(i, j+1)
          cnt += dfs(i, j-1)
          return cnt
      }
  for(let i=0;i<x;i++){
      for(let j =0;j<y;j++){
          if(grid[i][j]==1){
              max = Math.max(max,dfs(i,j))
          }
      }
  }
  return max
};
