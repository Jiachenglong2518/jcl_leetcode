/**
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 动态规划
 * index:  0 1 2 3 4 5 
 * arr:    0 1 0 3 2 3 
 * dp      1 1 1 1 1 1 
 * i=0:    1 
 * i=1:    1 2 
 * I=2:    1 2 1
 * I=3:    1 2 1 Math.max(1+1,2+1,1+1)   与前边每一个比较，每一个dp值都表示当前位置满足条件（升序）的最大值,如果arr[i] > arr[j](j < i),dp[i]= Math.max(arr[j]+1, dp[i])
 * i=4:    1 2 1 3 Math.max(1+1, 2+1 , 1+1 )
 * i=5:    1 2 1 3 3 Math.max(1+1, 2+1 ,1+1 , 3+1)   
 */

 var lengthOfLIS = function(nums) {
  var dp = new Array(nums.length).fill(1);
  for(var i = 0 ; i < nums.length ; i++){
    for(var j = 0 ; j < i ; j++){
      if (nums[i] > nums[j]){
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  console.log(...dp);
  return Math.max(...dp)
};
var a= [0,1,0,3,2,3]
lengthOfLIS(a)