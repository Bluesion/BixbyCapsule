var lib = require("./lib/shuffle.js");
module.exports.function = function ltOperation() {
  var temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
  var random = lib.shuffle(temp);

  const one = String(random.pop());
  const two = String(random.pop());
  const three = String(random.pop());
  const four = String(random.pop());
  const five = String(random.pop());
  const six = String(random.pop());
  const bonus = String(random.pop());

  const results = {
    numbers: mkaNumbers(one, two, three, four, five, six),
    bonus: bonus
  };

  return results;
}

function mkaNumbers(one, two, three, four, five, six) {
  var lotto = one + ", " + two + ", " + three + ", " + four + ", " + five + ", " + six;
  return lotto;
}
