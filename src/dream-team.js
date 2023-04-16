const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(names) {
  if (!Array.isArray(names)) {
    return false;
  }

  let filteredNames = names.filter((name) => {
    return typeof name === "string" && /[a-zA-Z]/.test(name);
  });

  return filteredNames
    .map((el) => el.trim().toUpperCase().slice(0, 1))
    .sort()
    .join("");
}

module.exports = {
  createDreamTeam,
};
