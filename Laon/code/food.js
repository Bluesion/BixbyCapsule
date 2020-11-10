const data = require("/data/food/food-data.js");
var console = require("console");
var lib = require("./lib/shuffle.js");
module.exports.function = function frOperation() {  
  var random = lib.shuffle(data);
  
  const one = random.pop();
  const two = random.pop();
  const three = random.pop();
  const four = random.pop();
  const five = random.pop();
  
  return [one, two, three, four, five];
}