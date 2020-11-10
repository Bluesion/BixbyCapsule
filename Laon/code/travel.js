const seoul = require("./data/travel/seoul.js")
const busan = require("./data/travel/busan.js")
var lib = require("./lib/shuffle.js")

module.exports.function = function trOperation(trCity) {
  var a = String(trCity);
  var b = [];
  
  const console = require('console');
  console.log("city is " + a);
  
  var unknown = ["죄송합니다. 추후 지원 예정입니다.", "", "", "", ""];
  
  if (trCity == "seoul") {
	  b = seoul;
  } else if (trCity == "busan") {
    b = busan;
  } else {
    b = unknown;
  }
  
  var random = lib.shuffle(b);
  
  const one = random.pop();
  const two = random.pop();
  const three = random.pop();
  const four = random.pop();
  const five = random.pop();
  
  return [one, two, three, four, five];
}