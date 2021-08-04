/**
 * 给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  if (nums.length < 3){
    console.log(0);
    return 0;
  }
  nums = nums.sort((a,b) => a - b)
  var res = 0;
  for(var i = 0 ; i < nums.length ; i++){
    for(var j = i + 1 ; j < nums.length; j ++){
      var left = j, right = nums.length , m = j
      while(left <= right){
        var mid = Math.floor( (right+ left) / 2);
        if (nums[mid] < nums[i] + nums [j]){
          m = mid
          left = mid + 1
        } else {
          right = mid - 1
        }
      }
      console.log('m:' + m);
      console.log('j: ' + j);
      res = res + m - j
    }
  }  
  console.log(res);
  return res
};

var a = [0,0,0];
triangleNumber(a)