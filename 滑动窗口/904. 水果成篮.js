/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
  let obj = {};
  let count = 0;
  let start = 0;
  let max = 0;
  for(let i=0;i<tree.length;i++){
      if(obj[tree[i]]){
          obj[tree[i]]++;
      }else{
          obj[tree[i]] = 1;
          count++;
      }
  while(count>2){
      let val = tree[start]
      obj[val]--;
      start++;
     if(!obj[val]) count--;
  }
  max = Math.max(max,i-start+1)
  }
  return max;
};