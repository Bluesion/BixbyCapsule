const images = require("./waist/images.js")
const stretching = require("./waist/stretchings.js")
module.exports = [
  {
    id: "W01",
    image: images.W01,
    name: "허리 통증 완화 스트레칭",
    description: "허리가 아프다면 따라해보세요.",
    count: stretching.W01.length,
    time: 1,
    step: stretching.W01
  },
  {
    id: "W02",
    image: images.W02,
    name: "골반 교정 스트레칭",
    description: "허리, 더 나빠지기 전에 교정하세요.",
    count: stretching.W02.length,
    time: 2,
    step: stretching.W02
  }
]