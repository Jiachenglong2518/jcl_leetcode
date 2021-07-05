/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
 var maxIceCream = function(costs, coins=7) {
   var num = 0
   costs.sort(function(a,b){
     return a-b
   })
   costs.forEach((item)=>{
    if (coins - item >= 0) {
      num++;
      coins = coins - item
    }
   })
   console.log(num);

 };

maxIceCream()