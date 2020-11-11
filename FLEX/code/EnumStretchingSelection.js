const neck = require("./data/neck.js");
const shoulder = require("./data/shoulder.js");
const waist = require("./data/waist.js");
const arm = require("./data/arm.js");
const leg = require("./data/leg.js");
const etc = require("./data/etc.js");
module.exports.function = function enumStretchingSelection(bodypart, stretching, speech) {
  if (bodypart == "Neck") {
    return neck;
  } else if (bodypart == "Shoulder") {
    return shoulder;
  } else if (bodypart == "Waist") {
    return waist;
  } else if (bodypart == "Arm") {
    return arm;
  } else if (bodypart == "Leg") {
    return leg;
  } else {
    return etc;
  }
}
