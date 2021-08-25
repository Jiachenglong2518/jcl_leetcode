/**
 * 
 * 给你一个有 n 个节点的 有向无环图（DAG），请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）
   二维数组的第 i 个数组中的单元都表示有向图中 i 号节点所能到达的下一些节点，空就是没有下一个结点了。
   来源：力扣（LeetCode）
   链接：https://leetcode-cn.com/problems/all-paths-from-source-to-target
 */
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 var allPathsSourceTarget = function(graph) {
  const ans = []
  const n = graph.length

  function backtrack(cur, path) {
    if (cur === n - 1) {
      ans.push(path.slice(0))
      return
    }
    for (const g of graph[cur]) {
      path.push(g)
      backtrack(g, path)
      path.pop()
    }
  }

  backtrack(0, [0]);
  console.log(ans);
  return ans
};


var a = [[1,2],[3],[3],[]];
allPathsSourceTarget(a);