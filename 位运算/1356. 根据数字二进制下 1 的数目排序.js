/**
 * @param {number[]} arr
 * @return {number[]}
 */
function sortByBits(arr) {
  function countBits(n) {
    let count = 0;
    while (n != 0) {  // 转二进制的操作
      count += n & 1; // 是1就+1，是0就+0 
      n >>= 1;	      // 即，除以2
    }
    return count;
  }
  return arr.sort((a, b) => { // 如果有差，则按bits数排，如果无差，则按原值排
    return countBits(a) - countBits(b) || a - b;
  });
}