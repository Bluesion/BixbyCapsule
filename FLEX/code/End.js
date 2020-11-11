const lib = require("./lib/shuffle.js");
const neck = require("./data/neck.js");
const shoulder = require("./data/shoulder.js");
const waist = require("./data/waist.js");
const arm = require("./data/arm.js");
const leg = require("./data/leg.js");
const etc = require("./data/etc.js");
module.exports.function = function End() {
  var list = ["정말 잘했어요!", "상당히 훌륭해요!", "아주 좋아요!", "매우 멋져요!", "완벽해요!", "짱이에요!", "스트레칭의 귀재 아닌가요?", "스트레칭 하는 모습에 반해버렸어요!"];
  var random = lib.shuffle(list);
  
  var neckNumber = Object.keys(neck).length;
  var shoulderNumber = Object.keys(shoulder).length;
  var waistNumber = Object.keys(waist).length;
  var armNumber = Object.keys(arm).length;
  var legNumber = Object.keys(leg).length;
  var etcNumber =  Object.keys(etc).length;
  var total = neckNumber + waistNumber + shoulderNumber + armNumber + legNumber + etcNumber;

  return [random[0], total.toString(), neckNumber.toString(), shoulderNumber.toString(), waistNumber.toString(), armNumber.toString(), legNumber.toString(), etcNumber.toString()];
}