/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let arr = []
  for(let i in asteroids){
      const asteroid = asteroids[i]
      if(arr[arr.length-1]>0&&asteroid<0){
          while(arr.length&&arr[arr.length-1]>0){
              let l = arr.pop()
              if(l+asteroid>0){
                  arr.push(l)
                  break;
              }else if(l+asteroid===0){
                  break
              }else{
                  if(arr.length===0||arr[arr.length-1]<0){
                      arr.push(asteroid);
                      break;
                  }
              }
          }
      }else{
          arr.push(asteroid)
      }
  }
  return arr;
};