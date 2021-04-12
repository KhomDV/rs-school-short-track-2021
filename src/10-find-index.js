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
  let ind = false;
  const qw = array.some((item, index) => {
    ind = index;
    return item === value;
  });

  if (qw) {
    return ind;
  }

  // function isBiggerThan10(element, index, array) {
  //   return element > 10;
  // }
  // [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
  // [12, 5, 8, 1, 4].some(isBiggerThan10);
  // if (array.includes(value)) {
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] === value) {
  //       return (i);
  //     }
  //   }
  // }
  return false;
}

module.exports = findIndex;
