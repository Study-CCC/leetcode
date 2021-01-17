/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  if(coordinates.length===2) return true;
  const x1 = coordinates[0][0],
        y1 = coordinates[0][1],
        x2 = coordinates[1][0],
        y2 = coordinates[1][1];
  for(let i = 2;i<coordinates.length;i++){
      let xi = coordinates[i][0],
          yi = coordinates[i][1];
      if((x1-xi)*(y2-yi)-(x2-xi)*(y1-yi)){
          return false
      }
  }
  return true;
};
/**
 * 斜率
 */