/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const aMine = Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    aMine[i] = Array(matrix[i].length);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const nStartX = (i - 1) < 0 ? 0 : (i - 1);
      const nEndX = (i + 1) > (matrix.length - 1) ? (matrix.length - 1) : (i + 1);
      const nStartY = (j - 1) < 0 ? 0 : (j - 1);
      const nEndY = (j + 1) > (matrix[i].length - 1) ? (matrix[i].length - 1) : (j + 1);
      let nMine = 0;
      for (let k = nStartX; k <= nEndX; k++) {
        for (let q = nStartY; q <= nEndY; q++) {
          if (i !== k || j !== q) {
            if (matrix[k][q] === true) {
              nMine++;
            }
          }
        }
      }
      aMine[i][j] = nMine;
    }
  }
  return aMine;
}

module.exports = minesweeper;
