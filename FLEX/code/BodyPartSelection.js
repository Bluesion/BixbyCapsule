const neck = require("./data/neck.js");
const shoulder = require("./data/shoulder.js");
const waist = require("./data/waist.js");
const arm = require("./data/arm.js");
const leg = require("./data/leg.js");
const etc = require("./data/etc.js");
module.exports.function = function bodyPartSelection(stretching, speech) {
  var neckNumber = Object.keys(neck).length;
  var shoulderNumber = Object.keys(shoulder).length;
  var waistNumber = Object.keys(waist).length;
  var armNumber = Object.keys(arm).length;
  var legNumber = Object.keys(leg).length;
  var etcNumber =  Object.keys(etc).length;
  var total = neckNumber + waistNumber + shoulderNumber + armNumber + legNumber + etcNumber;
  return [total.toString(), neckNumber.toString(), shoulderNumber.toString(), waistNumber.toString(), armNumber.toString(), legNumber.toString(), etcNumber.toString()];
}