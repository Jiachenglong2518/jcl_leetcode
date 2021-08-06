/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
   如果不存在公共前缀，返回空字符串 ""。
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var str = ''
  for(var i = 0 ;i < strs[0].length; i++){
    var l = strs.length;
    while( l > 0 && strs[0][i]  == strs[l-1][i] ){
      l--
    }
    if (l == 0) {
      str = str + strs[0][i]
    } else {
      break
    }
  }
  console.log(str);
  return str
};
var a = ["flaower","flaow","flaight"]
longestCommonPrefix(a)