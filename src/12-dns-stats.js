/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DNSStats = {};
  for (let i = 0; i < domains.length; i++) {
    let strDomains = '';
    domains[i].split('.').reverse().forEach((item) => {
      strDomains = `${strDomains}.${item}`;
      if (strDomains in DNSStats) {
        DNSStats[strDomains] += 1;
      } else {
        DNSStats[strDomains] = 1;
      }
    });
  }
  return DNSStats;
}

module.exports = getDNSStats;
