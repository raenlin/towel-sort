
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length === 0) {
    return []
  } else if(matrix.length === 0) {
    return [];
  } else { 
    for(let i=0; i<matrix.length; i++) {
    if(i % 2 !== 0) {
      matrix[i].reverse();
    }
  }

  let result = [];

  for(let i=0; i<matrix.length; i++) {
    for(let k=0; k<matrix[i].length; k++) {
      result.push(matrix[i][k]);
    };
  };

  return result;
  }
}
