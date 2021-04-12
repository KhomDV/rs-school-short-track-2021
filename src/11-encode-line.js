/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return str;
  const arrStr = str.split('');
  let codeLine = '';
  let s = arrStr[0];
  let n = 1;
  for (let i = 1; i < arrStr.length; i++) {
    if (s === arrStr[i]) {
      n += 1;
    } else {
      codeLine = codeLine + ((n === 1) ? '' : n) + s;
      s = arrStr[i];
      n = 1;
    }
  }
  if (s !== '') {
    codeLine = codeLine + ((n === 1) ? '' : n) + s;
  }
  return codeLine;
}

module.exports = encodeLine;
