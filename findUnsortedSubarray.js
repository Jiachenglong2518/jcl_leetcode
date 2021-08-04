/**
 * 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
   请你找出符合题意的 最短 子数组，并输出它的长度。
   来源：力扣（LeetCode）
   链接：https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray
   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(nums) {
  if (isSorted(nums)) {
      return 0;
  }
  const numsSorted = [...nums].sort((a, b) => a - b);
  let left = 0;
  while (nums[left] === numsSorted[left]) {
      left++;
  }
  let right = nums.length - 1;
  while (nums[right] == numsSorted[right]) {
      right--;
  }
  return right - left + 1;
};

const isSorted = (nums) => {
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
          return false;
      }
  }
  return true;
}