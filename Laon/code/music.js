const music2010 = require("/data/music/music-2010.js");
const music2011 = require("/data/music/music-2011.js");
const music2012 = require("/data/music/music-2012.js");
const music2013 = require("/data/music/music-2013.js");
const music2014 = require("/data/music/music-2014.js");
const music2015 = require("/data/music/music-2015.js");
const music2016 = require("/data/music/music-2016.js");
const music2017 = require("/data/music/music-2017.js");
const music2018 = require("/data/music/music-2018.js");
const music2019 = require("/data/music/music-2019.js");
var lib = require("./lib/random.js");
module.exports.function = function srOperation(genre) {
  var musicAll = music2010.concat(music2011).concat(music2012).concat(music2013).concat(music2014).concat(music2015).concat(music2016).concat(music2017).concat(music2018).concat(music2019);

  let result = [];

  for (let i = 0; i < 5; i++) {
    result.push(musicAll[lib.getRandomInt(0, 999)]);
  }
  
  return result;
}