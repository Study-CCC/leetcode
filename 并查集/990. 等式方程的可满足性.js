/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  let uf = new UF(26)
  for(let equation of equations){
      let zero = equation[0].charCodeAt() - 97
      let first = equation[1]
      let three = equation[3].charCodeAt() - 97
      if(first==='='){
          uf.union(zero,three)
      }
  }
  for(let equation of equations){
      let zero = equation[0].charCodeAt() - 97
      let first = equation[1]
      let three = equation[3].charCodeAt() - 97
      if(first==='!'){
          if(uf.find(zero)===uf.find(three)){
              return false;
          }
      }
  }
  return true;
};
class UF{
  constructor(n){
      this.parent = new Array(n).fill(0).map((item,index)=>index)
  }
  find(x){
      if(this.parent[x]!==x){
          this.parent[x] = this.find(this.parent[x])
      }
      return this.parent[x]
  }
  union(x,y){
      this.parent[this.find(x)] = this.find(y)
  }
}