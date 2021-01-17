/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.wordTree = {}
};

/**
* Adds a word into the data structure. 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let i = 0;
  let obj = this.wordTree;
  while(i<word.length){
      if(!obj[word[i]]){
          obj[word[i]] = {}
      }
      obj = obj[word[i]]
      i++;
  }
  obj.flag = true;
};

/**
* Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  let len = word.length;
  let obj = this.wordTree;
  let dfs = (i,obj)=>{
      if(i===len) return !!obj.flag; 
      if(word[i]==='.'){
          for(let key in obj){
              if(dfs(i+1,obj[key])) return true;
          }
      }else if(!obj[word[i]]) return false;
      else return dfs(i + 1, obj[word[i]]);
      return false;
  }  
  return dfs(0,obj) 
};

/**
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/