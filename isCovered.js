/**
 * 给你一个二维整数数组 ranges 和两个整数 left 和 right 。每个 ranges[i] = [starti, endi] 表示一个从 starti 到 endi 的 闭区间 。
 * 如果闭区间 [left, right] 内每个整数都被 ranges 中 至少一个 区间覆盖，那么请你返回 true ，否则返回 false 。
 * 已知区间 ranges[i] = [starti, endi] ，如果整数 x 满足 starti <= x <= endi ，那么我们称整数x 被覆盖
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/check-if-all-the-integers-in-a-range-are-covered
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
  ranges.sort((a,b)=>a[1] - b[1])
  for(var i = 0; i < ranges.length ; i++){
    var item = ranges[i]
    if (left >= item[0] && left < item[1]) {
      left = item[1]+1
    } else if (left == item[1]) {
      left++
    }
    if (right > item[0] && right <= item[1]) {
      right = item[0]-1
    } else if (right == item[0]) {
      right--
    }
    if (left > right) {
      break
    }
    console.log(i);
    console.log(left >= item[0] , 'left >= item[0] ');
    console.log(left < item[1] , ' left < item[1]');
    console.log('item:',item[0],item[1]);
    console.log('left:', left,right);
  }
  console.log('=========');
  console.log(left > right);
  console.log('left:', left,right);
  return left > right
};
var a =[[2,2],[3,3],[1, 1]]
isCovered(a,1,3);