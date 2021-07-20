/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 var maxFrequency = function(nums, k) {
  var new_nums = nums.sort((a,b)=>a-b)
  var m = 0;
  for (var j = 0 ; j< new_nums.length ; j++){ //new_nums[j] 为想要成为出现次数最多的数
    var count = 0;
    var k_copy = k;
    if(new_nums[j] - new_nums[j-1] > k_copy) {
    // 想要出现最多的数如果比他前一数的差大于K，则这个数只会出现一次 故 不用看后边了
      break
    }
    for (var i = j ; i >= 0 ; i--){
      if(new_nums[j] - new_nums[i] > k_copy) {
        // 想要出现最多的数如果比他前一数的差大于K，则这个数只会出现一次 故 不用看后边了
        break
      }
      if (new_nums[j] - new_nums[i] <= k_copy && new_nums[j] - new_nums[i] >= 0  && k_copy > 0) {
        count++;
        k_copy = k_copy - (new_nums[j] - new_nums[i])
      }
    }
    m= Math.max(m, count)
  }
  return m

};


// maxFrequency([1,2,4],5)
// 1 3 5 7 12 34 56 
// 0 1 2 3 4  5  6



var maxFrequency2 = function(nums, k) {
  nums = nums.sort((a,b)=>a-b)
  var left = 0, maxNum = 1;
  for(var right = 1; right< nums.length ; right++){
    k = k - (nums[right] - nums[right-1])*[right-left]
    while(k < 0){
      k = k + (nums[right] - nums[left]);
      left++
    }
      maxNum = Math.max(maxNum, right- left + 1) 
  }
  return  maxNum
};
var arr  = [1,3,5,7,8,9,12,15]
limit = 10
maxFrequency2 (arr,limit)
// 1 2 4 8 
// 0 1 2 3 
// console.log(arr.length, arr[70], arr[71]);

