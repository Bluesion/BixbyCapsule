const foodData = require("./data/food/food-data.js");
const lib = require("./lib/random.js");
module.exports.function = function frOperation() {
  let result = [];

  for (let i = 0; i < 5; i++) {
    result.push(foodData[lib.getRandomInt(0, 109)]);
  }
  
  return result;
}