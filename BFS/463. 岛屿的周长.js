/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let arr = []
  let perimeter = 0;
  let dx = [1,-1,0,0]
  let dy = [0,0,1,-1]
  for(let i=0;i<grid.length;i++){
      for(let j=0;j<grid[0].length;j++){
          if(grid[i][j]===1) arr.push([i,j])
      }
  }
  while(arr.length){
      let [x,y] = arr.shift()
      perimeter += 4
      for(let i=0;i<4;i++){
          let newX = x+dx[i]
          let newY = y+dy[i]
          if(newX<0||newX>=grid.length||newY<0||newY>=grid[0].length||grid[newX][newY]===0) continue;
          perimeter-=1;
      }
  }
  return perimeter;
};