/**
 * @param {string} formula
 * @return {string}
 */
 var countOfAtoms = function(formula) {
  var resObj = new Map();
  for(let i = 0 ; i < formula.length ; i++){
    console.log(typeof formula[i] );
    var key = ''
    if (formula[i] >= 'A' && formula[i] <= 'Z' && formula[i+1] >= 'a' && formula[i+1] <= 'z') {
      key = formula[i] + formula[i+1]
      i++
    }
  }
};

countOfAtoms('H2O')