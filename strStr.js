// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。
// 如果 needle 不是 haystack 的一部分，则返回  -1 。

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let pre = 0
  let after = 0
  while ( pre < haystack.length && after < needle.length ) {
    if (haystack[pre + after] == needle[after]) {
      after++
    } else {
      after = 0
      pre++
    }
  }
  return after == needle.length ? pre  : -1 
};

strStr('mississippi', 'issip')