module.exports.function = function drOperation() {
  const list = ["위", "아래", "앞", "뒤", "오른", "왼", "오른쪽 앞 대각선", "오른쪽 아래 대각선", "왼쪽 앞 대각선", "왼쪽 아래 대각선"];

  return list[Math.floor(Math.random() * list.length)]
}