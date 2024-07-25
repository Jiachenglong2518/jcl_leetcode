/**
 * @description 给你一个下标从 0 开始的整数数组 nums ，表示一些石块的初始位置。再给你两个长度 相等 下标从 0 开始的整数数组 moveFrom 和 moveTo 。
    在 moveFrom.length 次操作内，你可以改变石块的位置。在第 i 次操作中，你将位置在 moveFrom[i] 的所有石块移到位置 moveTo[i] 。
    完成这些操作后，请你按升序返回所有 有 石块的位置。
    注意：
    如果一个位置至少有一个石块，我们称这个位置 有 石块。
    一个位置可能会有多个石块。
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function(nums, moveFrom, moveTo) {
  const map = {}
  nums.forEach((item, index) => {
   map[item] = item
  })
  moveFrom.forEach((moveItem, index) => {
   delete map[moveItem]
   map[moveTo[index]] = moveTo[index]
  })
  return Object.keys(map).sort((a,b) => a-b )
};

relocateMarbles([1,6,7,8], [1,7,2], [2,9,5])