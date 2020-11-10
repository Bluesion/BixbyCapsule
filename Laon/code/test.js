var http = require('http')
var config = require('config')
var console = require('console')
var lib = require("./lib/shuffle.js")

module.exports.function = function trOperation(trCity) {
  const first = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=";
  const serviceKey = "1BKRwhPVdcF7sH%2Fjv4IlwkP4guqfGrdC26wcY6bMR9KLS8v9O2UHbwKf%2FYeFU4FzitJ%2FbHTNSl2XYbO3KVvwZQ%3D%3D";
  const last = "&contentTypeId=12&areaCode=1&sigunguCode=&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=Laon&arrange=A&numOfRows=12&pageNo=90";

  var url = first + serviceKey + last;
  let options = {
    format : "xmljs"
  };

  let rawData = http.getUrl(url, options);

  if ("items" in rawData.response.body) {
    console.log("NULL");
  } else {
    console.log("Response: " + rawData.response.body.items.item[0].contentid);
  }
  
  return ["a", "b", "c", "d", "e"];
}