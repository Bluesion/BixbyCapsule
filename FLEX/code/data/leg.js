const images = require("./leg/images.js")
const stretching = require("./leg/stretchings.js")
module.exports = [
  {
    id: "L01",
    image: images.L01,
    name: "종아리 스트레칭",
    description: "종아리가 뭉쳤다면 지금 시도해보세요.",
    count: stretching.L01.length,
    time: 1,
    step: stretching.L01
  },
  {
    id: "L02",
    image: images.L02,
    name: "다리 피로 스트레칭",
    description: "다리가 뻐근하다면 시도해보세요.",
    count: stretching.L02.length,
    time: 1,
    step: stretching.L02
  },
  {
    id: "L03",
    image: images.L03,
    name: "스쿼트 후 하체 스트레칭",
    description: "스쿼트 후에도 스트레칭이 필요합니다.",
    count: stretching.L03.length,
    time: 2,
    step: stretching.L03
  },
  {
    id: "L04",
    image: images.L04,
    name: "혈액순환 하체 스트레칭",
    description: "다리가 자주 붓는다면 한번 해보세요.",
    count: stretching.L04.length,
    time: 1,
    step: stretching.L04
  }
]