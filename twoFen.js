const binarySearch = (nums, target, lower) => {
  let left = 0, right = nums.length - 1, ans = nums.length;
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      console.log(mid);
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
          right = mid - 1;
          ans = mid;
      } else {
          left = mid + 1;
      }
      console.log(left,right);
  }
  console.log(ans);
  return ans;
}

const a = [1,3,4,6,8,10,11]
binarySearch(a, 3, true);