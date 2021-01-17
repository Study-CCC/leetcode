/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.trieTree = {}
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let i=0;
  let obj = this.trieTree;
  while(i<word.length){
      if(!obj[word[i]]){
          obj[word[i]] = {}
      }
      obj = obj[word[i]];
      i++;
  }
  obj.flag = true
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let i = 0;
  let obj = this.trieTree;
  while(i<word.length){
      if(!obj[word[i]]){
         return false;
      }
      obj = obj[word[i]];
      i++;
  }
  return !!obj.flag;
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
 let i = 0;
  let obj = this.trieTree;
  while(i<prefix.length){
      if(!obj[prefix[i]]){
         return false;
      }
      obj = obj[prefix[i]];
      i++;
  }
  return true;
};

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/