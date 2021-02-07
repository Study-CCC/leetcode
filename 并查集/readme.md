 并查集的特点就是边查询边修改
 有权图
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
 无权图
 class UnionFind{
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