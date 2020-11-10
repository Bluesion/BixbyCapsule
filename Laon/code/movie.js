const korea = require("./data/movie/korea.js");
var lib = require("./lib/shuffle.js");
module.exports.function = function mrOperation(mrNation) {
  var random = [];

  if (mrNation == "korea") {
    random = lib.shuffle(korea);
  } else {
    random = lib.shuffle(korea);
  }
  
  const one = random.pop();
  const two = random.pop();
  const three = random.pop();
  const four = random.pop();
  const five = random.pop();
  
  return [one, two, three, four, five];
}