/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  return [...new Set(s1)].filter((item) => s2.includes(item)).reduce((sum, item) => sum + Math.min(s1.split('').filter((e) => e === item).length, s2.split('').filter((e) => e === item).length), 0);
}

module.exports = getCommonCharacterCount;
