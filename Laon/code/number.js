module.exports.function = function rnOperation(min, max, count) {
  var result = "";
  
  if (count == 1) {
    result = String(Math.floor(Math.random() * (max - min + 1)) + min);
  } else {
    result = getRandomInt(min, max, count);
  }
  
  const results = {
    minInt: min,
    maxInt: max,
    totalCount: count,
    result: result
  };
  
  return results;
}

function getRandomInt(min, max, count) {
  var i = 0;
  var tempStr = "";
  while (i < count) {
    var temp = String(Math.floor(Math.random() * (max - min + 1)) + min);
    if (!tempStr.includes(temp)) {
      tempStr += temp + ", ";
      i += 1;
    }
  }
  
  const randomInt = tempStr.substring(0, tempStr.length - 2);
  
  return randomInt;
}