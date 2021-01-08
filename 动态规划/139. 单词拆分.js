/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  const len = s.length;
  const wordSet = new Set(wordDict);
  const memo = new Array(len);

  const canBreak = (start) => {
    if (start == len) return true;
    if (memo[start] !== undefined) return memo[start]; // memo中有，就用memo中的

    for (let i = start + 1; i <= len; i++) {
      const prefix = s.slice(start, i);
      if (wordSet.has(prefix) && canBreak(i)) {
        return true;
      }
    }
    memo[start] = false; // 当前递归的结果存一下
    return false;
  };
  return canBreak(0);
};
/**
 * 带记忆的dfs
 */

 /**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  const exitArr = new Array(s.length)
  exitArr[0] = true;
  for(let i=0;i<=s.length;i++){
      if(exitArr[i]){
      for(let j=i+1;j<=s.length+1;j++){
          let str = s.slice(i,j)
          if(wordDict.indexOf(str)>-1){
              exitArr[j]=true
          }
      }
      }else{
          exitArr[i]=false;
      }
  }
  return exitArr[s.length]
};

/**
 * 动态规划
 */
