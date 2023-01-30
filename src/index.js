
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return []
    matrix.map((el, index) => {
    if(index % 2) el.reverse()
  });
  //console.log(matrix);
  let result = matrix.reduce((acc, val) => acc.concat(val), []);
  //console.log(result);
  return result;
  
}
