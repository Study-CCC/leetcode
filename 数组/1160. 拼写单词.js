/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let arr = new Array(26).fill(0)
  let sumLen = 0;
  for(let i=0;i<chars.length;i++){
      arr[chars[i].charCodeAt()-97]++;
  }
  for(let i=0;i<words.length;i++){
      let curArr = [...arr]
      for(let j=0;j<words[i].length;j++){
          const index = words[i][j].charCodeAt()-97
          curArr[index]--;
          if(curArr[index]<0) break;
          if(j===words[i].length-1) sumLen += words[i].length
      }
  }
  return sumLen;
};