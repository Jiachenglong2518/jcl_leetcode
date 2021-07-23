//输入两个链表，找出它们的第一个公共节点。
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  const visited = new Set();
  let temp = headA;
  console.log(temp,'temp')
  while (temp !== null) {
      visited.add(temp);
      temp = temp.next;
      console.log(temp.next)
  }
  // temp = headB;
  // while (temp !== null) {
  //     if (visited.has(temp)) {
  //         return temp;
  //     }
  //     temp = temp.next;
  // }
  // return null;
};
var a = [4,1,8,4,5],
b = [5,0,1,8,4,5]
getIntersectionNode(a,b)