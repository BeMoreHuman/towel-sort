
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if (!matrix || matrix.length === 0) {
    return result;
  }

  matrix.forEach((element, index) => {
    if (index % 2) {
      result = [...result, ...element.reverse()];
    } else {
    result = [...result, ...element];
    }
  });

  return result;
}
