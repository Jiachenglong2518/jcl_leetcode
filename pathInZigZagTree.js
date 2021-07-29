/**
 *   在一棵无限的二叉树上，每个节点都有两个子节点，树中的节点 逐行 依次按 “之” 字形进行标记。
 *   如下图所示，在奇数行（即，第一行、第三行、第五行……）中，按从左到右的顺序进行标记；
 *   而偶数行（即，第二行、第四行、第六行……）中，按从右到左的顺序进行标记。
 *   给你树上某一个节点的标号 label，请你返回从根节点到该标号为 label 节点的路径，该路径是由途经的节点标号所组成的。
 *   来源：力扣（LeetCode）
 *   链接：https://leetcode-cn.com/problems/path-in-zigzag-labelled-binary-tree
 */
/**
 * @param {number} label
 * @return {number[]}
 */
 var pathInZigZagTree = function(label) {
  // 先确定在第几行
  var path = [] 
  var now_row = 1, row_max = 1;
  while(row_max < label){
    now_row++;
    row_max = Math.pow(2,now_row)-1
  }
  var  num =  now_row % 2 == 0 ? Math.pow(2,now_row)-1 - label :  label - Math.pow(2,now_row-1)
  for(var i = now_row ; i > 0 ; i--){
    if (i % 2 == 0){
      var now_left = Math.pow(2,i)-1;
      var now_label = now_left - num;
      num = Math.floor(( now_left - now_label )/2) ;
    } else {
      var now_left = Math.pow(2,i-1)
      var now_label = now_left + num;
      num = Math.floor( ( now_label - now_left   )/2);
    }
    path.push(now_label)
    console.log(i,'now_left:' + now_left, 'now_label:'+ now_label, 'num:' + num);
  }
  console.log(path);
  return path.reverse()
};
pathInZigZagTree(26)