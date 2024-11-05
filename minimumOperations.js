/**
 * @description 给你一个下标从 0 开始的字符串 num ，表示一个非负整数。
    在一次操作中，您可以选择 num 的任意一位数字并将其删除。请注意，如果你删除 num 中的所有数字，则 num 变为 0。
    返回最少需要多少次操作可以使 num 变成特殊数字。

    如果整数 x 能被 25 整除，则该整数 x 被认为是特殊数字
    。
    示例 1：
    输入：num = "2245047"
    输出：2
    解释：删除数字 num[5] 和 num[6] ，得到数字 "22450" ，可以被 25 整除。
    可以证明要使数字变成特殊数字，最少需要删除 2 位数字。s

 
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function(num) {
  const numArr = num.split('');
  const resArr = [];
  let firstIndex
  let secondIndex
  for (let i = numArr.length - 1; i >= 0; i--) {
    console.log('index: ', i)
    console.log('numArr[i]: ', numArr[i])
    resArr.push(i)
    console.log('resArr: ',resArr)
    if ( !firstIndex && numArr[i] == 0 ) {
      firstIndex = i
      resArr.pop()
      console.log('resArr: ',resArr)
      continue
    }
    if ( firstIndex && !secondIndex && (numArr[i] == 0 || numArr[i] == 5)) {
      secondIndex = i
      resArr.pop()
      console.log('resArr: ',resArr)
      // break
    }
    console.log('resArr: ',resArr)
    console.log('-----------------')

  }
  console.log(resArr)
  return resArr.length

};

minimumOperations("2245047")