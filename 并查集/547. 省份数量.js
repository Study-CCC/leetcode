/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const n = isConnected.length
  const uf = new UF(n)
  for(let i=0;i<n;i++){
      for(let j=i+1;j<n;j++){
          if(isConnected[i][j]===1){
              uf.union(i,j)
          }
      }
  }
  let count = 0;
  uf.parent.map((item,index)=>{
      if(item===index){
          count++;
      }
  })
  return count
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
}
