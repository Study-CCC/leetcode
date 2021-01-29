/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let res = [];  
  let start = 0;
  let end = -1;
  let win = new Array(26).fill(0)
  let pArr = new Array(26).fill(0)
  for(let i=0;i<p.length;i++){
      let cur = p[i].charCodeAt()-'a'.charCodeAt()
      pArr[cur]++; 
  }
  for(let i=0;i<s.length;i++){
      let cur = s[i].charCodeAt()-'a'.charCodeAt()
      win[cur]++;
      end++;
      while(win[cur]>pArr[cur]){
          let startStr = s[start].charCodeAt()-'a'.charCodeAt()
          start++;
          win[startStr]--;
      }
      if(end-start+1===p.length){
          res.push(start)
      }
  }
  return res;
};