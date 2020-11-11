const images = require("./shoulder/images.js")
const stretching = require("./shoulder/stretchings.js")
module.exports = [
  {
    id: "S01",
    image: images.S01,
    name: "승모근 스트레칭",
    description: "어깨가 뭉쳤다면 필수로 해야하는 스트레칭!",
    count: stretching.S01.length,
    time: 1,
    step: stretching.S01
  },
  {
    id: "S02",
    image: images.S02,
    name: "어깨 통증 완화 스트레칭",
    description: "어깨가 아프다면 시도해보세요.",
    count: stretching.S02.length,
    time: 1,
    step: stretching.S02
  },
  {
    id: "S03",
    image: images.S03,
    name: "수건을 이용한 어깨 스트레칭",
    description: "수건 한장만으로도 할 수 있는 스트레칭입니다.",
    count: stretching.S03.length,
    time: 1,
    step: stretching.S03
  }
]