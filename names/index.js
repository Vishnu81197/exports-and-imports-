let array = require("../country/state/city/index");
let getFirstNames = require("../utilities/utils/index");

module.exports = function getPeopleInCity() {
  return getFirstNames(array);
};
