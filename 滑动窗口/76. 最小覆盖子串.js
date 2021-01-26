/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let start = 0;
  let end = Infinity;
  let map = {}
  let mapType = 0;
  let min = Infinity;
  for(let i = 0;i < t.length;i++){
      if(map[t[i]]){
          map[t[i]]++;
      }else{
          map[t[i]]=1;
          mapType++;
      }
  }
  for(let i=0;i<s.length;i++){
      if(map[s[i]]!==undefined){
          map[s[i]]--;
      if(map[s[i]]===0){
          mapType--;
      }
      }
      while(mapType===0){
          if(i-start+1<min){
              min = i - start + 1;
              end = i + 1 ;
          }
          if(map[s[start]]!==undefined){
              map[s[start]]++;
          if(map[s[start]]>0){
              mapType++;
          }
          }
          start++;
      }
  }
  return min===Infinity?'':s.slice(end-min,end)
};