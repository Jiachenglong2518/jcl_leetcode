/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 */
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  var l = 0, r = 0; 
  if (s.length < 2) {
    return s
  }
  for(var i = 0 ; i< s.length ; i++){ //把 i 当作回文子串的中心
    find(i,i+1) //回文子串为偶数时
    find(i,i)   //会问字串为奇数时
  }
  function find(start,end){
    while(start >=0 && end < s.length && s[start] == s[end]){
      start--;
      end++
    }
    if (end - start > r -l) {
      l = start ;
      r = end
    }
  }
  console.log(s.slice(l+1 , r));
  return s.slice(l+1 , r)
  
};
var a = '00'
// console.log(a.reverse());
longestPalindrome(a)