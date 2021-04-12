/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let indBeg = 0;
  let indEnd = array.length - 1;

  if (array[indBeg] === value) return indBeg;
  if (array[indEnd] === value) return indEnd;

  while (indBeg <= indEnd) {
    const cut = Math.round((indEnd + indBeg) / 2);
    if (array[cut] === value) {
      return cut;
    }
    if (array[cut] > value) {
      indBeg = cut + 1;
    } else {
      indEnd = cut - 1;
    }
  }
  return -1;
}

module.exports = findIndex;
