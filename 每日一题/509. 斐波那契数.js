/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if(n===0||n===1){
      return n;
  }
  return fib(n-1)+fib(n-2)
};

/**
 * 递归
 */

 /**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  let db = [0,1]
   if(n===0||n===1) return db[n]
   for(let i=2;i<=n;i++){
       db[i] = db[i-1] + db[i-2]
   }
   return db[n]
};
/**
 * 带备忘录
 */