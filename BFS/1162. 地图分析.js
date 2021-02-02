/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  let arr = []
  let point = null;
  let hasPool = false;
  let dx = [1,-1,0,0]
  let dy = [0,0,1,-1]
  for(let i=0;i<grid.length;i++){
      for(let j=0;j<grid.length;j++){
          if(grid[i][j]===1) arr.push([i,j])
      }
  }
  while(arr.length){
      point = arr.shift()
      let [x,y] = point;
      for(let i=0;i<4;i++){
          let newX = x+dx[i]
          let newY = y+dy[i]
          if(newX<0||newY<0||newX>=grid.length||newY>=grid.length||grid[newX][newY]) continue;
          hasPool = true;                
          grid[newX][newY] = grid[x][y]+1  
          arr.push([newX,newY])  
      }
  }
  if(!point||!hasPool) return -1;
  return grid[point[0]][point[1]] - 1;
};