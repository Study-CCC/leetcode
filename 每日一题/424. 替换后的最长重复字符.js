/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const num = new Array(26).fill(0);
  const n = s.length;
  let maxn = 0, left = 0, right = 0;

  while (right < n) {
      num[s[right].charCodeAt() - 'A'.charCodeAt()]++;
      maxn = Math.max(maxn, num[s[right].charCodeAt() - 'A'.charCodeAt()])
      // 这里right和left虽然变了，但是这里maxn依然是最大出现次数
      if (right - left + 1 - maxn > k) {
          num[s[left].charCodeAt() - 'A'.charCodeAt()]--;
          left++;
      }
      right++;
  }
  return right - left;
};
/**
 * 滑动窗口
 */