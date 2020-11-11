const images = require("./arm/images.js")
const stretching = require("./arm/stretchings.js")
module.exports = [
  {
    id: "A01",
    image: images.A01,
    name: "손목 스트레칭",
    description: "각종 전자기기로 인한 손목 통증을 예방해요.",
    count: stretching.A01.length,
    time: 1,
    step: stretching.A01
  }
]