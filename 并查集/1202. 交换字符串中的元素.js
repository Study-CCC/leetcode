/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
  const fa = new Array(s.length).fill(0)
  const find = (x) => {
      return x===fa[x]?x:fa[x]=find(fa[x])
  }
  for(let i=0;i<fa.length;i++){
      fa[i] = i;
  }
  // 构建父子关系
  for(let i=0;i<pairs.length;i++){
      let first = pairs[i][0],second = pairs[i][1];
      let faFir = find(first),secFir = find(second);
      // 判断两个父元素不相等
      if(faFir^secFir){
          fa[faFir] = secFir
      }
  }
  // 用于保存不同集合
  const vec = new Array(s.length).fill(0).map(i=>[])
  for(let i=0;i<s.length;i++){
      // 寻找最顶端根节点
      fa[i] = find(i);
      vec[fa[i]].push(s[i])
  }
  for(let i=0;i<vec.length;i++){
      if(vec[i].length>0){
      // 字母不能相减，要转化成相应的编码
      vec[i].sort((a,b)=>a.charCodeAt()-b.charCodeAt())
      }
  }
  const curIndex = new Array(s.length).fill(0)
  const res = []
  for(let i=0;i<s.length;i++){
      res.push(vec[fa[i]][curIndex[fa[i]]])
      curIndex[fa[i]]++;
  }
  return res.join('')
};