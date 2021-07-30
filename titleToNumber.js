/**
 * 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回该列名称对应的列序号。
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
 */
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  var re = 0;
  for(var i = 0; i< columnTitle.length; i++){
    re = re + (columnTitle[i].charCodeAt() - 64) * Math.pow(26,columnTitle.length -1 -i) 
  }
  return re;
};