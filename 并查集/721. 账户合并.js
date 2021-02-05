/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  let nameMap = new Map()
  let indexMap = new Map()
  let index = 0;
  for(let account of accounts){
     let name =  account[0]
     for(let i=1;i<account.length;i++){
         if(!indexMap.has(account[i])){
             nameMap.set(account[i],name)
             indexMap.set(account[i],index++)
         }
     }
  }
  let uf = new UnionFind(index)
  for(let account of accounts){
      let father = account[1]
      let fatherIndex = indexMap.get(father) 
      for(let i=2;i<account.length;i++){
          uf.union(indexMap.get(account[i]),fatherIndex)
      }
  }
  let map = new Map()
  for(let email of indexMap.keys()){
      let fatherIndex = uf.find(indexMap.get(email))
      let accountArr = map.has(fatherIndex)?map.get(fatherIndex):[]
      accountArr.push(email)
      map.set(fatherIndex,accountArr)
  }
  let res = []
  for(let index of map.keys()){
      let accountArr = map.get(index)
      let name = nameMap.get(accountArr[0])
      accountArr = accountArr.sort()
      res.push([name,...accountArr])
  }
  return res;
};
class UnionFind{
  constructor(n){
      this.parent = new Array(n).fill(0).map((item,index)=>index)
  }
  find(x){
      if(x!==this.parent[x]){
          this.parent[x] = this.find(this.parent[x])
      }
      return this.parent[x];;
  }
  union(x,y){
      this.parent[this.find(x)] = this.find(y)
  }

}