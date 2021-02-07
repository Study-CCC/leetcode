/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  let index = 0;
  let map = new Map()
  for(let edge of edges){
      let a = edge[0]
      let b = edge[1]
      if(!map.has(a)){
          map.set(a,index++)
      }
      if(!map.has(b)){
          map.set(b,index++)
      }
  }
  let uf = new UF(index)
  for(let edge of edges){
      let a = map.get(edge[0])
      let b = map.get(edge[1])
      if(uf.connect(a,b)){
          return [edge[0],edge[1]]
      }else{
          uf.union(a,b)
      }
  }
};
class UF{
  constructor(n){
      this.parent = new Array(n).fill(0).map((item,index)=>index)
  }
  find(x){
      if(x!==this.parent[x]){
          this.parent[x] = this.find(this.parent[x])
      }
      return this.parent[x]
  }
  union(x,y){
      this.parent[this.find(x)] = this.find(y)
  }
  connect(x,y){
      return this.find(x)===this.find(y)
  }
}