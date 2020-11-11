const images = require("./etc/images.js")
const stretching = require("./etc/stretchings.js")
module.exports = [
  {
    id: "E01",
    image: images.E01,
    name: "자기 전 스트레칭",
    description: "꿀잠을 위해 FLEX 하세요.",
    count: stretching.E01.length,
    time: 1,
    step: stretching.E01
  },
  {
    id: "E02",
    image: images.E02,
    name: "아침 스트레칭",
    description: "하루를 스트레칭으로 시작해보세요.",
    count: stretching.E02.length,
    time: 2,
    step: stretching.E02
  },
  {
    id: "E03",
    image: images.E03,
    name: "전신 스트레칭",
    description: "온몸이 시원해지는 스트레칭입니다.",
    count: stretching.E03.length,
    time: 2,
    step: stretching.E03
  },
  {
    id: "E04",
    image: images.E04,
    name: "운동 전 후 스트레칭",
    description: "운동 전후에 꼭 필요한 스트레칭!",
    count: stretching.E04.length,
    time: 2,
    step: stretching.E04
  },
  {
    id: "E05",
    image: images.E05,
    name: "족저근막염 스트레칭",
    description: "족저근막염을 방지하여 건강한 삶을 누려보세요.",
    count: stretching.E05.length,
    time: 3,
    step: stretching.E05
  },
  {
    id: "E06",
    image: images.E06,
    name: "힙업 스트레칭",
    description: "섹시한 엉덩이를 만들어보세요.",
    count: stretching.E06.length,
    time: 2,
    step: stretching.E06
  },
  {
    id: "E07",
    image: images.E07,
    name: "앉아서 하는 전신 스트레칭",
    description: "앉아서 편하게 스트레칭을 즐기세요.",
    count: stretching.E07.length,
    time: 3,
    step: stretching.E07
  },
  {
    id: "E08",
    image: images.E08,
    name: "코어강화 전신 스트레칭",
    description: "코어 근육을 풀어보세요.",
    count: stretching.E08.length,
    time: 4,
    step: stretching.E08
  }
]