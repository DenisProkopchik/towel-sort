
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) return [];
  let result = [];
  matrix.forEach((item, index) => {
    if (index - 1 % 3 === 0 || index === 3) {
      result.push(...item.reverse());
    } else {
      result.push(...item.sort((a, b) => a - b));
    }
  });
  return result;
}
