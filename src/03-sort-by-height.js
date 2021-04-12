/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrSort = arr;
  const nLen = arrSort.length - 1;
  let numbMax = 0;
  for (let i = 0; i < nLen; i++) {
    let j = 0;
    while (j < (nLen - i)) {
      if (arrSort[j] !== -1) {
        let k = j + 1;
        while (k <= nLen) {
          if (arrSort[k] !== -1) {
            if (arrSort[j] > arrSort[k]) {
              numbMax = arrSort[j];
              arrSort[j] = arrSort[k];
              arrSort[k] = numbMax;
            }
            break;
          } else {
            k++;
          }
        }
        j = k;
      } else {
        j++;
      }
    }
  }
  return arrSort;
}

module.exports = sortByHeight;
