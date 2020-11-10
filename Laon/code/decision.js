module.exports.function = function decision(dummy, speech) {
  var index = Math.floor(Math.random() * 2);
  const buy = ["사세요", "사지 마세요"];
  const eat = ["드세요", "드시지 마세요"];
  const act = ["하세요", "하지 마세요"];
  const go = ["가세요", "가지 마세요"];
  
  var result = "";

  if (speech == "Buy") {
    result = buy[index];
  } else if (speech == "Eat") {
    result = eat[index];
  } else if (speech == "Go") {
    result = go[index];
  } else if (speech == "Do") {
    result = act[index];
  } else {
    result = "오류가 발생했어요. 개발자에게 연락해주시겠어요?";
  }
  
  return result;
}