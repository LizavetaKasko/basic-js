const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  let arr2 = array.map(function (el) {
    let count = 0;
    for (let i = 0; i < el.length; i++) {
      if (el[i] === "^^") {
        count++;
      }
    }
    return count;
  });

  return (result = arr2.reduce(function (acc, cur) {
    return acc + cur;
  }, 0));
}

module.exports = {
  countCats,
};
