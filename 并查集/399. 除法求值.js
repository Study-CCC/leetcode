/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  let res = []
  let index = 0;
  let map = new Map()
  for(let equation of equations){
      let a = equation[0]
      let b = equation[1]
      if(!map.has(a)) map.set(a,index++)
      if(!map.has(b)) map.set(b,index++)
  }
  let uf = new UF(index)
  for(let i=0;i<equations.length;i++){
      let a = equations[i][0]
      let b = equations[i][1]
      let val = values[i]
      a = map.get(a)
      b = map.get(b)
      uf.union(a,b,val)
  }
  for(let querie of queries){
      let a = querie[0]
      let b = querie[1]
      if(!(map.has(a)&&map.has(b))) res.push(-1)
      else{
          a = map.get(a)
          b = map.get(b)
         let pA = uf.find(a)
         let pB = uf.find(b)
         if(pA===pB){
             res.push(uf.weight[a]/uf.weight[b])
         }else{
             res.push(-1)
         }
      }
  }
  return res
};
class UF{
  constructor(n){
      this.parent = new Array(n).fill(0).map((item,index)=>index)
      this.weight = new Array(n).fill(1)
  }
  find(x){
      if(x!==this.parent[x]){
          const father = this.find(this.parent[x])
          this.weight[x] = this.weight[x]*this.weight[this.parent[x]]
          this.parent[x] = father
      }
      return this.parent[x]
  }
  union(x,y,val){
      const uX = this.find(x)
      const uY = this.find(y)
      this.parent[uX] = uY
      this.weight[uX] = val*this.weight[y]/this.weight[x]
  }
}