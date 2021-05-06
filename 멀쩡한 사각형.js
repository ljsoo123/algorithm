function solution(w, h) {
  var wNum = 1,
    hNum = 1;
  var answer = 1;
  while (wNum != w || hNum != h) {
    if (w / wNum == h / hNum) {
      wNum++;
      hNum++;
    } else if (w / wNum > h / hNum) {
      wNum++;
    } else if (w / wNum < h / hNum) {
      hNum++;
    }
    answer++;
  }
  return w * h - answer;
}
