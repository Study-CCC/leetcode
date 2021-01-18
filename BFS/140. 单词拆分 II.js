/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
function wordBreak(s, wordDict) {
  let memo = new Array(s.length)
  let wordSet = new Set(wordDict)
  let dfs = (start)=>{
      if(memo[start]){
          return memo[start]
      }
      if(start>=s.length){
          return [[]]
      }
      let res = []
      for(let i=start+1;i<=s.length;i++){
          let str = s.slice(start,i)
          if(wordSet.has(str)){
              let words = dfs(i)
              for(let word of words){
                  res.push([str,...word])
              }
          }
      }
      memo[start] = res;
      return res;
  }
  return dfs(0).map(item=>item.join(' '))
}
/**
 * dfs + 记忆化
 */