/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function(land) {
  let res = []
  let lenX =land.length
  let lenY = land[0].length
  let dfs = (x,y)=>{
      if(x<0||y<0||x>=lenX||y>=lenY) return 0;
      if(land[x][y]!==0) return 0;
      land[x][y]=1;
      let position = [0,1,-1]
      let ant = 1;
      for(let i=0;i<3;i++){
          for(let j=0;j<3;j++){
              ant+=dfs(position[i]+x,y+position[j])
          }
      }
      return ant
  }
  for(let i=0;i<lenX;i++){
      for(let j=0;j<lenY;j++){
          if(land[i][j]===0){
              res.push(dfs(i,j))
          }
      }
  }
  return res.sort((a,b)=>a-b)
};