/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  var max = 0;
  var left = 0,right = 0;
  var obj = {};
  for(left = 0;left < s.length; left++){
    if (s.indexOf(s[left], left+1) > 0 && s.indexOf(s[left], left+1) < max) {
      break
    }
    right = left + 1;
    console.log(left, right);
    obj[s[left]] = 1;
    while( !obj[s[right]] && right < s.length) {
      obj[s[right]] = 1;
      right++
      console.log(obj);
      console.log(obj[s[right]],'obj[s[right]]');
      console.log('left:' + left , 'right:'+ right, 's[right]:' + s[right]);
    }
    obj = {};
    max = Math.max(max, right - left)
    console.log(max,'max');
  }
  console.log(max,'max');
  return max;
};
// lengthOfLongestSubstring("pwwkew")

var lengthOfLongestSubstring2 = function(s) {
  var left = 0;
  var max = 0;
  for(left = 0;left < s.length; left++){
    var right = s.indexOf(s[left], left+1) > 0 ? s.indexOf(s[left], left+1) : s.length
    console.log(left, right);
    max = Math.max(max , right - left)
  }
  console.log(max,'max');
  return max;
};
lengthOfLongestSubstring2("abcabcbb")