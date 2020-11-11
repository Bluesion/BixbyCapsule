const images = require("./neck/images.js")
const stretching = require("./neck/stretchings.js")
module.exports = [
  {
    id: "N01",
    image: images.N01,
    name: "거북목 스트레칭",
    description: "이제 거북목은 안녕~",
    count: stretching.N01.length,
    time: 2,
    step: stretching.N01
  },
  {
    id: "N02",
    image: images.N02,
    name: "목 통증 완화 스트레칭",
    description: "목이 아프다면 따라해보세요.",
    count: stretching.N02.length,
    time: 2,
    step: stretching.N02
  },
  {
    id: "N03",
    image: images.N03,
    name: "수건을 활용한 목 스트레칭",
    description: "수건으로 하는 간단한 스트레칭!",
    count: stretching.N03.length,
    time: 3,
    step: stretching.N03
  }
]