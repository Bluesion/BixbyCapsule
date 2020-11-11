const neck = require("./data/neck.js");
const shoulder = require("./data/shoulder.js");
const waist = require("./data/waist.js");
const arm = require("./data/arm.js");
const leg = require("./data/leg.js");
const etc = require("./data/etc.js");
module.exports.function = function idStretchingSelection(id) {
  if (id == "N") {
    return neck;
  } else if (id == "S") {
    return shoulder;
  } else if (id == "W") {
    return waist;
  } else if (id == "A") {
    return arm;
  } else if (id == "L") {
    return leg;
  } else {
    return etc;
  }
}