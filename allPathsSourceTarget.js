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