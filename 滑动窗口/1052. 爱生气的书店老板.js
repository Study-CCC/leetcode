/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let total = 0;
  let max = 0;
  for(let i=0;i<customers.length;i++){
      let sum = 0;
      if(grumpy[i]===0) total += customers[i]
  }
  for(let i=0;i<X;i++){
      max += customers[i]*grumpy[i]
  }
  let cur = max;
  for(let i=X;i<customers.length;i++){
      cur = cur - customers[i-X]*grumpy[i-X]+customers[i]*grumpy[i];
      max = Math.max(cur,max)
  }
  return max + total;
}