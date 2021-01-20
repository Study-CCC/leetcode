/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  let res = []
  for(let i=0;i<12;i++){
      for(let j=0;j<60;j++){
          if(nums(i)+nums(j)===num){
             res.push(`${i}:${String(j).padStart(2,0)}`)
          }
      }
  }
  return res
};
const nums = (num)=>{
  let count = 0;
  while(num!=0){
      count++;
      num=num&(num-1)
  }
  return count
}
/**
 * 非回溯算法
 */