/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  stones = stones.sort((a,b)=>a-b)
  while(stones.length>1){
      let value = stones.pop()- stones.pop()
      if(value!==0){
          stones.push(value)
          stones.sort((a,b)=>a-b)
      }
  }
  return stones.length>0?stones[0]:0
};

/**
 * 迭代
 */